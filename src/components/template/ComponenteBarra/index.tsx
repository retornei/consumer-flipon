import Link from "next/link";
import Router from "next/router";

import { IconDiv, Divisao } from "./styles";

interface ComponenteBarraProps {
  fazer: boolean;
  ativo: boolean;
  feito: boolean;
  divisao: boolean;
  cor: string;
  uri: string;
  isBlocked: boolean | (() => boolean);
  blockMessage: string;
}

export default function ComponenteBarra(props: ComponenteBarraProps) {
  const handleClick = () => {
    if (typeof props.isBlocked === "boolean") {
      if (!props.isBlocked || props.feito) {
        Router.push(props.uri);
      } else {
        console.log(props.blockMessage);
      }
    } else if (!props.isBlocked() || props.feito) {
      Router.push(props.uri);
    } else {
      console.log(props.blockMessage);
    }
  };

  return (
    <>
      <IconDiv
        fazer={props.fazer}
        ativo={props.ativo}
        feito={props.feito}
        onClick={handleClick}
      />

      {props.divisao && <Divisao cor={props.cor} />}
    </>
  );
}
