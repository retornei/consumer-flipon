import React from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { setInfo } from "../store/slices/newClientSlice";

import Layout from "../components/template/Layout";
import Input from "../components/template/Input";
import Button from "../components/template/Button";
import Page from "../components/template/Page";
import Checkbox from "../components/template/Checkbox";

import {
  FormGroup,
  Label,
  Span,
  P,
  Formulario,
  FormGroupCheck,
  ButtonGroup,
  ErrorMessage
} from "../components/styles/pages/signUpStyles";
import { newUser, userSignUp } from "../services/api/methods";
import toast from "react-hot-toast";

const schema = yup.object({
  username: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório").min(6, "Mínimo 6 caracteres"),
  confirmPassword: yup.string().required("Campo obrigatório").oneOf([yup.ref("password")], "Senhas estão diferentes"),
  terms: yup.bool().oneOf([true], "É preciso estar de acordo com o termo")
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();

  const handleSignup = (data) => {
    const usernameSerialized = data.username.replace(/\D/g, '');

    userSignUp({ username: usernameSerialized, password: data.password })
      .then(async res => {
        dispatch(setInfo(res));

        try {
          await newUser(res);
          Router.push('/new-company');
        } catch (err) {
          toast.error(err.message);
        }
        
      })
      .catch(err => toast.error(err.message))
  }

  return (
    <Layout>
      <Page title="Criar minha conta">
        <Formulario onSubmit={handleSubmit(handleSignup)}>
          <FormGroup>
            <Label>
              CPF/CNPJ <Span>*</Span>
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
              SENHA <Span>*</Span>
            </Label>
            <Input {...register("password")} type="password" />

            {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>
              CONFIRMA SENHA <Span>*</Span>
            </Label>
            <Input {...register("confirmPassword")} type="password" />

            {errors.confirmPassword?.message && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
          </FormGroup>

          <FormGroupCheck>
            <Checkbox {...register("terms")} />
            <P>
              ESTOU DE ACORDO COM A <a href="#">POLÍTICA DE PRIVACIDADE.</a>
              <Span>*</Span>
            </P>

            {errors.terms?.message && <ErrorMessage>{errors.terms.message}</ErrorMessage>}
          </FormGroupCheck>

          <ButtonGroup>
            <Button type="submit">Criar</Button>
          </ButtonGroup>
        </Formulario>
      </Page>
    </Layout>
  );
}
