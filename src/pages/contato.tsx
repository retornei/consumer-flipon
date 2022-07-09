import Layout from "../components/template/Layout";
import Image from "next/image";
import Input from "../components/template/Input";
import {
  Container,
  Card,
  Formulario,
  FormGroup,
  Label,
  Textarea,
  Button,
  ContainerButton,
  ButtonWhatsApps,
  ButtonFormulario,
  WhatsImg,
  Span,
} from "../components/styles/pages/contatoStyles";

import whats from "../../public/img/whatsApp.png";
import { useState } from "react";

export default function Contato() {
  const [whatsApp, SetWhatsApp] = useState(true);

  return (
    <Layout>
      <Container>
        <Card>
          <h1>Contato</h1>
          <ContainerButton>
            <ButtonWhatsApps
              whatsApp={whatsApp}
              onClick={() => SetWhatsApp(true)}
            >
              WhatsApp
            </ButtonWhatsApps>
            <ButtonFormulario
              whatsApp={whatsApp}
              onClick={() => SetWhatsApp(false)}
            >
              Formulário
            </ButtonFormulario>
          </ContainerButton>

          {whatsApp && (
            <WhatsImg>
              <a href="https://web.whatsapp.com/">
                <Image
                  src={whats}
                  alt="Logo da Empresa"
                  width="250"
                  height="80"
                />
              </a>
              <p>(11) 99999-0000</p>
            </WhatsImg>
          )}

          {!whatsApp && (
            <Formulario>
              <FormGroup>
                <Label>
                  Nome<Span>*</Span>
                </Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label>
                  Telefone<Span>*</Span>
                </Label>
                <Input mask="fone" />
              </FormGroup>
              <FormGroup>
                <Label>
                  E-mail<Span>*</Span>
                </Label>
                <Input type="email" />
              </FormGroup>
              <FormGroup>
                <Label>
                  Mensagem<Span>*</Span>
                </Label>
                <Textarea />
              </FormGroup>

              <Button>Enviar</Button>
            </Formulario>
          )}
        </Card>
      </Container>
    </Layout>
  );
}
