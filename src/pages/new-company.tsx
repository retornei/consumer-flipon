import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import * as yup from "yup";
import toast from "react-hot-toast";
import Router from "next/router";
import { useEffect, useState } from "react";

import { RootState } from "../store";
import { zipConsult, updateUser } from "../services/api/methods";

import Layout from "../components/template/Layout";
import Input from "../components/template/Input";
import Button from "../components/template/Button";
import Page from "../components/template/Page";
// import Checkbox from "../components/template/Checkbox";

import {
  FormGroup,
  Label,
  Span,
  Formulario,
  ButtonGroup,
  Row,
  Title,
  ErrorMessage,
} from "../components/styles/pages/newCompanyStyles";

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
  endereco: yup.object({
    cep: yup.string().required("Campo obrigatório"),
    logradouro: yup.string().required("Campo obrigatório"),
    numero: yup.string().required("Campo obrigatório"),
    bairro: yup.string().required("Campo obrigatório"),
    municipio: yup.string().required("Campo obrigatório"),
    uf: yup.string().required("Campo obrigatório"),
    complemento: yup.string().nullable(),
  }),
  /* enderecoEntrega: yup.object({
    cep: yup.string().required("Campo obrigatório"),
    logradouro: yup.string().required("Campo obrigatório"),
    numero: yup.string().required("Campo obrigatório"),
    bairro: yup.string().required("Campo obrigatório"),
    municipio: yup.string().required("Campo obrigatório"),
    uf: yup.string().required("Campo obrigatório"),
    complemento: yup.string(),
  }), */
});

export default function SignUp() {
  const info = useSelector((state: RootState) => state.newClient.companyData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });
  const [loadingCep, setLoadingCep] = useState<boolean>(false);
  const [cacheCep, setCacheCep] = useState<string>("");
  const [sameAddress, setSameAddress] = useState<boolean>(false);
  const [cpfCnpj, setCpfCnpj] = useState<string>("");

  useEffect(() => {
    setCpfCnpj(info.cpfCnpj || "");
    setValue("celular", info.celular || "");
    setValue("contato", info.contato || "");
    setValue("email", info.email || "");
    setValue("endereco", info.endereco || "");
    // setValue("enderecoEntrega", info.enderecoEntrega || "");
    setValue("nomeRazaoSocial", info.nomeRazaoSocial || "");
    setValue("nomeFantasia", info.nomeFantasia || "");
    setValue("inscricaoEstadual", info.inscricaoEstadual || "");
    setValue("inscricaoMunicipal", info.inscricaoMunicipal || "");
    setValue("telefone", info.telefone || "");
    setValue("site", info.site || "");

    //eslint-disable-next-line
  }, []);

  /* useEffect(() => {
    if (sameAddress) {
      setValue('enderecoEntrega.cep', getValues('endereco.cep'));
      setValue('enderecoEntrega.logradouro', getValues('endereco.logradouro'));
      setValue('enderecoEntrega.numero', getValues('endereco.numero'));
      setValue('enderecoEntrega.complemento', getValues('endereco.complemento'));
      setValue('enderecoEntrega.bairro', getValues('endereco.bairro'));
      setValue('enderecoEntrega.municipio', getValues('endereco.municipio'));
      setValue('enderecoEntrega.uf', getValues('endereco.uf'));
    } else {
      setValue('enderecoEntrega.cep', "");
      setValue('enderecoEntrega.logradouro', "");
      setValue('enderecoEntrega.numero', "");
      setValue('enderecoEntrega.complemento', "");
      setValue('enderecoEntrega.bairro', "");
      setValue('enderecoEntrega.municipio', "");
      setValue('enderecoEntrega.uf', "");
    }

    //eslint-disable-next-line
  }, [sameAddress]) */

  const handleRegister = async (data) => {

    try {
      await updateUser({...data, uuid: info.uuid, cpfCnpj: info.cpfCnpj});

      toast.success("Cadastro realizado! Aguarde seu acesso ser liberado.");

      Router.push('/sign-in');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const checkCep = async (type) => {
    const cep = getValues(`${type}.cep`);

    if (cep) {
      const cepSerialized = cep.replace(/\D/g, "");

      if (cepSerialized.length === 8 && cepSerialized !== cacheCep) {
        setLoadingCep(true);

        const address = await zipConsult(cepSerialized);

        setCacheCep(cepSerialized);
        setLoadingCep(false);

        setValue(`${type}.logradouro`, address.logradouro);
        setValue(`${type}.municipio`, address.localidade);
        setValue(`${type}.uf`, address.uf);
        setValue(`${type}.bairro`, address.bairro);
      }
    }
  };

  return (
    <Layout>
      <Page title="Cadastrar empresa">
        <Formulario onSubmit={handleSubmit(handleRegister)}>
          <FormGroup>
            <Label>CNPJ</Label>
            <Input type="text" mask="cpfcnpj" disabled={true} value={cpfCnpj} />
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

          <Title>Endereço</Title>

          <FormGroup>
            <Label>
              CEP <Span>*</Span>
            </Label>
            <Input
              {...register("endereco.cep")}
              disabled={loadingCep}
              type="text"
              onBlur={() => checkCep("endereco")}
            />

            {errors.endereco?.cep?.message && (
              <ErrorMessage>{errors.endereco.cep.message}</ErrorMessage>
            )}
          </FormGroup>

          <Row columns="1fr 120px">
            <FormGroup>
              <Label>
                Logradouro <Span>*</Span>
              </Label>
              <Input {...register("endereco.logradouro")} type="text" />

              {errors.endereco?.logradouro?.message && (
                <ErrorMessage>
                  {errors.endereco.logradouro.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>
                Nº <Span>*</Span>
              </Label>
              <Input {...register("endereco.numero")} type="text" />

              {errors.endereco?.numero?.message && (
                <ErrorMessage>{errors.endereco.numero.message}</ErrorMessage>
              )}
            </FormGroup>
          </Row>

          <Row columns="49% 49%">
            <FormGroup>
              <Label>Complemento</Label>
              <Input {...register("endereco.complemento")} type="text" />

              {errors.endereco?.complemento?.message && (
                <ErrorMessage>
                  {errors.endereco.complemento.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>
                Bairro <Span>*</Span>
              </Label>
              <Input {...register("endereco.bairro")} type="text" />

              {errors.endereco?.bairro?.message && (
                <ErrorMessage>{errors.endereco.bairro.message}</ErrorMessage>
              )}
            </FormGroup>
          </Row>

          <Row columns="1fr 120px">
            <FormGroup>
              <Label>
                Município <Span>*</Span>
              </Label>
              <Input {...register("endereco.municipio")} type="text" />

              {errors.endereco?.municipio?.message && (
                <ErrorMessage>{errors.endereco.municipio.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>
                UF <Span>*</Span>
              </Label>
              <Input {...register("endereco.uf")} type="text" />

              {errors.endereco?.uf?.message && (
                <ErrorMessage>{errors.endereco.uf.message}</ErrorMessage>
              )}
            </FormGroup>
          </Row>

          {/* <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
            <h3 style={{marginBottom: 0}}>
              Endereço de entrega
            </h3>
            <Checkbox label="Mesmo endereço" checked={sameAddress} onChange={() => setSameAddress(!sameAddress)} />
          </div>

          <FormGroup>
            <Label>
              CEP <Span>*</Span>
            </Label>
            <Input
              {...register("enderecoEntrega.cep")}
              type="text"
              onBlur={() => checkCep("enderecoEntrega")}
            />

            {errors.enderecoEntrega?.cep?.message && (
              <ErrorMessage>{errors.enderecoEntrega.cep.message}</ErrorMessage>
            )}
          </FormGroup>

          <Row columns="1fr 120px">
            <FormGroup>
              <Label>
                Logradouro <Span>*</Span>
              </Label>
              <Input {...register("enderecoEntrega.logradouro")} type="text" />

              {errors.enderecoEntrega?.logradouro?.message && (
                <ErrorMessage>
                  {errors.enderecoEntrega.logradouro.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>
                Nº <Span>*</Span>
              </Label>
              <Input {...register("enderecoEntrega.numero")} type="text" />

              {errors.enderecoEntrega?.numero?.message && (
                <ErrorMessage>
                  {errors.enderecoEntrega.numero.message}
                </ErrorMessage>
              )}
            </FormGroup>
          </Row>

          <Row columns="49% 49%">
            <FormGroup>
              <Label>Complemento</Label>
              <Input {...register("enderecoEntrega.complemento")} type="text" />

              {errors.enderecoEntrega?.complemento?.message && (
                <ErrorMessage>
                  {errors.enderecoEntrega.complemento.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>
                Bairro <Span>*</Span>
              </Label>
              <Input {...register("enderecoEntrega.bairro")} type="text" />

              {errors.enderecoEntrega?.bairro?.message && (
                <ErrorMessage>
                  {errors.enderecoEntrega.bairro.message}
                </ErrorMessage>
              )}
            </FormGroup>
          </Row>

          <Row columns="1fr 120px">
            <FormGroup>
              <Label>
                Município <Span>*</Span>
              </Label>
              <Input {...register("enderecoEntrega.municipio")} type="text" />

              {errors.enderecoEntrega?.municipio?.message && (
                <ErrorMessage>
                  {errors.enderecoEntrega.municipio.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>
                UF <Span>*</Span>
              </Label>
              <Input {...register("enderecoEntrega.uf")} type="text" />

              {errors.enderecoEntrega?.uf?.message && (
                <ErrorMessage>{errors.enderecoEntrega.uf.message}</ErrorMessage>
              )}
            </FormGroup>
          </Row> */}

          <ButtonGroup>
            <Button type="submit">Cadastrar</Button>
          </ButtonGroup>
        </Formulario>
      </Page>
    </Layout>
  );
}
