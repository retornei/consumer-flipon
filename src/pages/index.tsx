import Layout from "../components/template/Layout";
import Link from "next/link";
import { parseCookies } from "nookies";

import Input from "../components/template/Input";
import Button from "../components/template/Button";

import {
  Card,
  Formulario,
  FormGroup,
  Label,
  Span,
  ButtonContainer,
  Title,
} from "../components/styles/pages/indexStyles";
import { GetServerSideProps } from "next";

const Home: React.FC = () => {
  return (
    <Layout>
      <Card>
        <Title>Buscar Pedido</Title>
        
        <Formulario>
          <FormGroup>
            <Label>
              Pedido<Span>*</Span>
            </Label>
            <Input placeholder="0000000000000-00" />
          </FormGroup>
          
          <FormGroup>
            <Label>
              E-mail utilizado na compra<Span>*</Span>
            </Label>
            <Input type="email" placeholder="Confirme seu e-mail" />
          </FormGroup>

          <ButtonContainer>
            <Link href="/sign-in" passHref>
              <Button>Continuar</Button>
            </Link>
          </ButtonContainer>
        </Formulario>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@retornei-app.token']: token } = parseCookies(ctx);
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      }
    }
  return {
    props: {}
  }
}

export default Home;
