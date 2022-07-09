import Index from "../components/template/LayoutRetornei";
import Link from "next/link";

import { getUserInfo, updatePassword } from "../services/api/methods";

import Button from "../components/template/Button";

import { Container, Card, Div } from "../components/styles/pages/minhaContaStyles";
import { useEffect, useState } from "react";
import Input from "../components/template/Input";
import toast from "react-hot-toast";

export type UserType = {
  active: boolean;
  celular?: string;
  contato?: string;
  cpfCnpj: string;
  email?: string;
  inscricaoEstadual?: string;
  inscricaoMunicipal?: string;
  nomeFantasia: string;
  nomeRazaoSocial: string;
  site?: string;
  telefone?: string;
  telefoneContato?: string;
  uuid: string;
}

export default function MinhaConta() {
  const [user, setUser] = useState<UserType>();
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

  useEffect(() => {
    (async () => {
      const data = await getUserInfo();

      setUser(data);
    })();
  }, []);

  return (
    <Index titulo="1" subtitulo="2">
      <Container>
        <h1>MINHA CONTA</h1>

        <Card>
          <Div>
            <h1>Dados Pesoais</h1>
          </Div>
          <p>
            <span>Razão Social:</span> {user?.nomeRazaoSocial ? user.nomeRazaoSocial : '--'}
          </p>
          <p>
            <span>Nome Fantasia:</span> {user?.nomeFantasia ? user.nomeFantasia : '--'}
          </p>
          <p>
            <span>CPF/CNPJ:</span> {user?.cpfCnpj ? user?.cpfCnpj.length === 14 ? user.cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5") : user.cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : '--'}
          </p>
          <p>
            <span>Inscrição Estadual:</span> {user?.inscricaoEstadual ? user.inscricaoEstadual : '--'}
          </p>
          <p>
            <span>Inscrição Municipal:</span> {user?.inscricaoMunicipal ? user.inscricaoMunicipal : '--'}
          </p>
          <p>
            <span>E-mail:</span> {user?.email ? user.email : '--'}
          </p>
          <p>
            <span>Site:</span> {user?.site ? user.site : '--'}
          </p>
          <p>
            <span>Telefone:</span> {user?.telefone ? user.telefone : '--'}
          </p>
          <p>
            <span>Celular:</span> {user?.celular ? user.celular : '--'}
          </p>
          <p>
            <span>Contato:</span> {user?.contato ? user.contato : '--'}
          </p>
          <p>
            <span>Telefone do Contato:</span> {user?.telefoneContato ? user.telefoneContato : '--'}
          </p>

          <div>
            <h3 style={{textAlign: 'center'}}>Alterar senha</h3>

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

            <Button onClick={() => handleUpdateSenha()}>Alterar</Button>
          </div>

          <Div>
            <Link href="/dados-pessoais" passHref>
              <Button>Editar</Button>
            </Link>
          </Div>
        </Card>
      </Container>
    </Index>
  );
}
