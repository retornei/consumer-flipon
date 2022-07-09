import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

import Index from "../components/template/LayoutRetornei";
import Link from "next/link";

import Input from "../components/template/Input";

import {
  Container,
  Card,
  FormGroup,
  Formulario,
  Label,
  ButtonGroup,
  Button,
  Span,
  ErrorMessage,
  Row,
} from "../components/styles/pages/dadosPessoaisStyles";

import { getUserInfo, updateUserInfo } from "../services/api/methods";

import { UserType } from "./minha-conta";
import Router from "next/router";

interface FormData {
  nomeRazaoSocial?: string;
  nomeFantasia?: string;
  inscricaoEstadual?: string;
  inscricaoMunicipal?: string;
  email?: string;
  site?: string;
  telefone?: string;
  celular?: string;
  contato?: string;
}

const schema = yup.object({
  nomeRazaoSocial: yup.string().required("Campo obrigatório"),
  nomeFantasia: yup.string().required("Campo obrigatório"),
  inscricaoEstadual: yup.string(),
  inscricaoMunicipal: yup.string(),
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  site: yup.string(),
  telefone: yup.string(),
  celular: yup.string().required("Campo obrigatório"),
  contato: yup.string().required("Campo obrigatório"),
});

export default function DadosPessoais() {
  const [cpfCnpj, setCpfCnpj] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    //console.log(data);
    
    try {
      await updateUserInfo(data);
      
      toast.success("Dados atualizados!");
      
      Router.push('/minha-conta');
    } catch(err) {
      toast.error(err.message);
    }

  }

  useEffect(() => {
    (async () => {
      const data: UserType = await getUserInfo();

      setCpfCnpj(data.cpfCnpj);
      setValue("celular", data.celular || "");
      setValue("contato", data.contato || "");
      setValue("email", data.email || "");
      setValue("inscricaoEstadual", data.inscricaoEstadual || "");
      setValue("inscricaoMunicipal", data.inscricaoMunicipal || "");
      setValue("nomeFantasia", data.nomeFantasia || "");
      setValue("nomeRazaoSocial", data.nomeRazaoSocial || "");
      setValue("site", data.site || "");
      setValue("telefone", data.telefone || "");
    })();

    //eslint-disable-next-line
  }, []);

  return (
    <Index titulo="1" subtitulo="2">
      <Container>
        <Card>
          <h1>Dados Pessoais</h1>
          <Formulario onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>CNPJ</Label>
              <Input
                type="text"
                mask="cpfcnpj"
                disabled={true}
                value={cpfCnpj}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Razão social <Span>*</Span>
              </Label>
              <Input {...register("nomeRazaoSocial")} type="text" />

              {errors.nomeRazaoSocial?.message && (
                <ErrorMessage>{errors.nomeRazaoSocial.message}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>
                Nome fantasia <Span>*</Span>
              </Label>
              <Input {...register("nomeFantasia")} type="text" />

              {errors.nomeFantasia?.message && (
                <ErrorMessage>{errors.nomeFantasia.message}</ErrorMessage>
              )}
            </FormGroup>

            <Row columns="49% 49%">
              <FormGroup>
                <Label>Inscrição estadual</Label>
                <Input {...register("inscricaoEstadual")} type="text" />
              </FormGroup>

              <FormGroup>
                <Label>Inscrição municipal</Label>
                <Input {...register("inscricaoMunicipal")} type="text" />
              </FormGroup>
            </Row>

            <FormGroup>
              <Label>
                E-mail <Span>*</Span>
              </Label>
              <Input {...register("email")} type="email" />

              {errors.email?.message && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Site</Label>
              <Input {...register("site")} type="text" />
            </FormGroup>

            <FormGroup>
              <Label>
                Contato <Span>*</Span>
              </Label>
              <Input {...register("contato")} type="text" />

              {errors.contato?.message && (
                <ErrorMessage>{errors.contato.message}</ErrorMessage>
              )}
            </FormGroup>

            <Row columns="49% 49%">
              <FormGroup>
                <Label>Telefone</Label>
                <Input {...register("telefone")} type="text" mask="fone" />
              </FormGroup>

              <FormGroup>
                <Label>
                  Celular <Span>*</Span>
                </Label>
                <Input {...register("celular")} type="text" mask="fone" />

                {errors.celular?.message && (
                  <ErrorMessage>{errors.celular.message}</ErrorMessage>
                )}
              </FormGroup>
            </Row>

            <ButtonGroup>
              <Link href="/minha-conta" passHref>
                <Button>Cancelar</Button>
              </Link>

              <Button type="submit">Salvar</Button>
            </ButtonGroup>
          </Formulario>
        </Card>
      </Container>
    </Index>
  );
}
