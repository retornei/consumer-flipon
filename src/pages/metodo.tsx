import Image from "next/image";
import Link from "next/link";

import Layout from "../components/template/Layout";
import BarraProgresso from "../components/template/BarraProgresso";
import Button from "../components/template/Button";
import Page from "../components/template/Page";
import RadioGroup from "../components/template/RadioGroup";

import {
  ButtonGroup,
  MapContainer,
} from "../components/styles/pages/metodoStyles";

import mapa from "../../public/img/mapa.png";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Metodo() {
  return (
    <Layout>
      <BarraProgresso tela={3} />

      <Page title="Método">
        {/* <RadioGroup
          title="Opção mais próxima"
          data={[
            {
              id: "1",
              address: "Rua José Pedro da Silva, 62",
              distance: "1,2km",
            },
          ]}
          type="address"
          groupName="address"
        /> */}

        {/* <RadioGroup
          title="Locker Inteligente"
          data={[
            { id: "2", address: "Av. 13 de Março, 62", distance: "2,2km" },
            {
              id: "3",
              address: "Pça. Vila Mariana da Silva, 30",
              distance: "4,6km",
            },
            {
              id: "4",
              address: "Rua Carlos Silva de Oliveira, 80",
              distance: "5,3km",
            },
          ]}
          type="address"
          groupName="address"
          showPagination={true}
        /> */}

        <RadioGroup
          title="Postagem nos Correios"
          data={[
            { id: "5", address: "Av. 13 de Março, 62", distance: "2,2km" },
            {
              id: "6",
              address: "Pça. Vila Mariana da Silva, 30",
              distance: "4,6km",
            },
            {
              id: "7",
              address: "Rua Carlos Silva de Oliveira, 80",
              distance: "5,3km",
            },
          ]}
          type="address"
          groupName="address"
          showPagination={true}
        />

        <RadioGroup
          title="Coleta"
          data={[
            {
              id: "8",
              address: "Coleta pelos correios",
              shipping: 0,
            },
            {
              id: "9",
              address: "Expressa com agendamento",
              shipping: 10.5,
            },
          ]}
          type="shipping"
          groupName="address"
        />

        <MapContainer>
          <Image
            src={mapa}
            height="350"
            width="350"
            alt="Mapa para o consumidor"
          />
        </MapContainer>

        <ButtonGroup>
          <Link href="/produto" passHref>
            <Button>Voltar</Button>
          </Link>
          <Link href="/confirmacao" passHref>
            <Button>Continuar</Button>
          </Link>
        </ButtonGroup>
      </Page>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@retornei-app.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      }
    } 
  }
  
  return {
    props: {}
  }
}
