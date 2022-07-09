import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Index from "../../components/template/LayoutRetornei";
import Link from "next/link";
import Input from "../../components/template/Input";
import Button from "../../components/template/Button";

import {
  Container,
  Card,
  ButtonGroup,
  FormGroup,
  Formulario,
  Label,
  Span,
  ErrorMessage,
} from "../../components/styles/pages/enderecoStyles";
import {
  newAddress,
  zipConsult,
} from "../../services/api/methods";
import toast from "react-hot-toast";
import Router from "next/router";
import { useState } from "react";

interface FormFields {
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  municipio: string;
  uf: string;
  complemento?: string;
  description: string;
}

const schema = yup.object().shape({
  cep: yup.string().required("Campo obrigatório"),
  logradouro: yup.string().required("Campo obrigatório"),
  numero: yup.string().required("Campo obrigatório"),
  bairro: yup.string().required("Campo obrigatório"),
  municipio: yup.string().required("Campo obrigatório"),
  uf: yup.string().required("Campo obrigatório"),
  complemento: yup.string().nullable(),
  description: yup.string().required("Campo obrigatório"),
});

export default function Endereco() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({ resolver: yupResolver(schema) });
  const [loadingCep, setLoadingCep] = useState<boolean>(false);
  const [cacheCep, setCacheCep] = useState<string>("");

  const onSubmit = async (data: FormFields) => {
    console.log(data);

    try {
      await newAddress(data);

      toast.success("Endereço cadastrado com sucesso");

      Router.push("/meus-enderecos");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const checkCep = async () => {
    const cep = getValues("cep");

    if (cep) {
      const cepSerialized = cep.replace(/\D/g, "");

      if (cepSerialized.length === 8 && cepSerialized !== cacheCep) {
        setLoadingCep(true);

        const address = await zipConsult(cepSerialized);

        setCacheCep(cepSerialized);
        setLoadingCep(false);

        setValue("logradouro", address.logradouro);
        setValue("municipio", address.localidade);
        setValue("uf", address.uf);
        setValue("bairro", address.bairro);
      }
    }
  };

  return (
    <Index titulo="1" subtitulo="2">
      <Container>
        <Card>
          <h1>Endereço</h1>

          <Formulario onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>
                Descrição <Span>*</Span>
              </Label>
              <Input {...register("description")} />
              {errors.description?.message && (
                <ErrorMessage>{errors.description.message}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>
                CEP <Span>*</Span>
              </Label>
              <Input
                {...register("cep")}
                disabled={loadingCep}
                onBlur={() => checkCep()}
              />
              {errors.cep?.message && (
                <ErrorMessage>{errors.cep.message}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>
                Logradouro<Span>*</Span>
              </Label>
              <Input {...register("logradouro")} />
              {errors.logradouro?.message && (
                <ErrorMessage>{errors.logradouro.message}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>
                Numero <Span>*</Span>
              </Label>
              <Input {...register("numero")} />
              {errors.numero?.message && (
                <ErrorMessage>{errors.numero.message}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>
                Bairro <Span>*</Span>
              </Label>
              <Input {...register("bairro")} />
              {errors.bairro?.message && (
                <ErrorMessage>{errors.bairro.message}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label>
                Cidade <Span>*</Span>
              </Label>
              <Input {...register("municipio")} />
              {errors.municipio?.message && (
                <ErrorMessage>{errors.municipio.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>
                Estado <Span>*</Span>
              </Label>
              <Input {...register("uf")} />
              {errors.uf?.message && (
                <ErrorMessage>{errors.uf.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Complemento</Label>
              <Input {...register("complemento")} />
            </FormGroup>

            <ButtonGroup>
              <Link href="/meus-enderecos" passHref>
                <Button type="button">Cancelar</Button>
              </Link>

              <Button type="submit">Salvar</Button>
            </ButtonGroup>
          </Formulario>
        </Card>
      </Container>
    </Index>
  );
}
