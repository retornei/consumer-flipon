import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Layout from "../components/template/Layout";
import Input from "../components/template/Input";
import Button from "../components/template/Button";
import Page from "../components/template/Page";

import {
  FormGroup,
  ButtonCriar,
  Label,
  Span,
  Formulario,
  ButtonGroup,
  ErrorMessage
} from "../components/styles/pages/signInStyles";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Router from "next/router";
import toast from "react-hot-toast";

interface SignInPayload {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async ({ username, password }: SignInPayload) => {
    try {
      const username_serialized = username.replace(/\D/g, '');
      
      setLoading(true);
      
      await signIn({username: username_serialized, password});
      
      setLoading(false);

      Router.push('/pedido');
    } catch (err) {
      setLoading(false);
      
      toast.error(err.message);
    }
  };

  return (
    <Layout>
      <Page title="Login">
        <Formulario onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>
              CPF/CNPJ<Span>*</Span>
            </Label>
            <Input
              {...register("username")}
              type="text"
              mask="cpfcnpj"
              placeholder="00.000.000/0000-00"
            />
            {errors.username?.message && <ErrorMessage>{errors.username.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>
              SENHA<Span>*</Span>
            </Label>
            <Input {...register("password")} type="password" />
            {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </FormGroup>

          <ButtonGroup>
            <Button disabled={loading} type="submit">ENTRAR</Button>

            <Link href="/sign-up" passHref>
              <ButtonCriar type="button">CRIAR MINHA CONTA</ButtonCriar>
            </Link>
          </ButtonGroup>
        </Formulario>
      </Page>
    </Layout>
  );
}
