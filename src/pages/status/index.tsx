import React, { useContext } from 'react';

import Layout from "../../components/template/Layout";
import Link from "next/link";

import BarraProgresso from "../../components/template/BarraProgresso";
import Page from "../../components/template/Page";
import Button from "../../components/template/Button";

import {
  Container,
  ButtonGroup
} from "../../components/styles/pages/statusStyles";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import {PageContext} from "../../context/PageContext";

export default function Confirmacao() {
  const { page } = useContext(PageContext);
  return (
    <Layout>
      <BarraProgresso tela={5} />

      <Page title="Status do Retorno">
        { page.status &&
          <Container>
            <h3>Seu Pedido foi enviado para Equipe da FlipOn</h3>
            <h4>Agradecemos pela confiança, retornaremos o mais breve possível.</h4>
          </Container>
        }


          <ButtonGroup>
            <Link href="/meus-retornos" passHref>
              <Button>Meus Retornos</Button>
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
