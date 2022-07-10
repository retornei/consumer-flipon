import Link from "next/link";

import Layout from "../components/template/Layout";
import BarraProgresso from "../components/template/BarraProgresso";
import Button from "../components/template/Button";
import Page from "../components/template/Page";

import {
  ButtonGroup,
} from "../components/styles/pages/metodoStyles";

import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Metodo() {
  return (
    <Layout>
      <BarraProgresso tela={3} />

      <Page title="Método">


    <h1>Postagem a Agência dos Correios mais Próxima</h1>

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
