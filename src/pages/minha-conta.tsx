import Index from "../components/template/LayoutRetornei";
import Link from "next/link";

import { getUserInfo } from "../services/api/methods";

import Button from "../components/template/Button";

import { Container, Card, Div } from "../components/styles/pages/minhaContaStyles";
import { useEffect, useState } from "react";

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
