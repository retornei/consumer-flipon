import Link from "next/link";

import { ContainerTexto, Container, Text, Barra, Div } from "./styles";
import ComponenteBarra from "../ComponenteBarra";

interface BarraProgressoProps {
  tela: number;
  isBlocked?: boolean | (() => boolean);
  blockMessage?: string;
}

export default function BarraProgresso({
  isBlocked = false,
  blockMessage = "",
  ...props
}: BarraProgressoProps) {
  const telas = ["Pedido", "Produto", "Método", "Confirmação", "Status"];

  const uris = ["pedido", "produto", "metodo", "confirmacao", "status"];

  function renderizarBarras() {
    return telas.map((tela, index) => {
      return (
        <ComponenteBarra
          key={index}
          fazer={index + 1 < props.tela ? false : true}
          ativo={index + 1 === props.tela ? true : false}
          feito={index + 1 === props.tela ? false : true}
          divisao={index === telas.length - 1 ? false : true}
          cor={index + 1 < props.tela ? "black" : "#DCDCDC"}
          uri={uris[index]}
          isBlocked={isBlocked}
          blockMessage={blockMessage}
        />
      );
    });
  }

  function renderizarTexto() {
    return telas.map((tela, index) => {
      return (
        <Text key={index} cor="black">
          {tela}
        </Text>
      );
    });
  }

  return (
    <Div>
      <Barra>
        <Container>{renderizarBarras()}</Container>

        <ContainerTexto>{renderizarTexto()}</ContainerTexto>
      </Barra>
    </Div>
  );
}
