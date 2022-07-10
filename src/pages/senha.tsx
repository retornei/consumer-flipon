import Layout from "../components/template/Layout";
import Page from "../components/template/Page";

import {
  Container,
  Div,
} from "../components/styles/pages/senhaStyles";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useState } from "react";
import toast from "react-hot-toast";
import Input from "../components/template/Input";
import Button from "../components/template/Button";
import {updatePassword} from "../services/api/methods";


export default function Senha() {
  const [senhaAntiga, setSenhaAntiga] = useState<string>("");
  const [novaSenha, setNovaSenha] = useState<string>("");
  const [confirmarSenha, setconfirmarSenha] = useState<string>("");
  const handleUpdateSenha = async () => {
    const payload = {
      novaSenha,
      senhaAntiga,
    }

    if (!senhaAntiga) {
      toast.error("Forneça a senha atual");
      return false;
    }

    if (!novaSenha || !confirmarSenha) {
      toast.error("Verifique campos obrigatórios");
      return false;
    }

    if (novaSenha !== confirmarSenha) {
      toast.error("Nova senha não estão diferentes");
      return false;
    }

    try {
      await updatePassword(payload);

      toast.success("Senha atualizada com sucesso");
      setSenhaAntiga("");
      setNovaSenha("");
      setconfirmarSenha("");
    } catch (err) {
      toast.error(err.message);
    }
  }



  return (
    <Layout>
      <Page title="Trocar Senha">
        <Container>

          <div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <label style={{marginLeft: 15, marginBottom: 3, fontSize: 18, fontWeight: 900, color: 'grey'}}>Senha atual <sup>*</sup></label>
              <Input type="password" value={senhaAntiga} onChange={ev => setSenhaAntiga(ev.currentTarget.value)} />
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <label style={{marginLeft: 15, marginBottom: 3, fontSize: 18, fontWeight: 900, color: 'grey'}}>Nova senha <sup>*</sup></label>
              <Input type="password" value={novaSenha} onChange={ev => setNovaSenha(ev.currentTarget.value)} />
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <label style={{marginLeft: 15, marginBottom: 3, fontSize: 18, fontWeight: 900, color: 'grey'}}>Confirmar senha <sup>*</sup></label>
              <Input type="password" value={confirmarSenha} onChange={ev => setconfirmarSenha(ev.currentTarget.value)} />
            </div>

            <Div>
              <Button onClick={() => handleUpdateSenha()}>Alterar</Button>
            </Div>

          </div>

        </Container>
      </Page>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["@retornei-app.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
