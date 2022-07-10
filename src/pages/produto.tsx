import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import { RootState } from "../store";
import { updateField, addPhoto, removePhoto } from "../store/slices/orderSlice";

import { uploadPhoto } from "../services/api/methods";

import Layout from "../components/template/Layout";
import BarraProgresso from "../components/template/BarraProgresso";
import Page from "../components/template/Page";
import Button from "../components/template/Button";
import Select from "../components/template/Select";
import ImageUpload from "../components/template/ImageUpload";
import { Accordion } from "../components/template/Accordion/Accordion";

import {
  Formulario,
  Row,
  FormGroup,
  Option,
  Label,
  Textarea,
  Span,
  ButtonGroup,
  ImagesContainer,
} from "../components/styles/pages/produtoStyles";
import React, { useEffect, useRef } from "react";
import Router from "next/router";
import toast from "react-hot-toast";
import Input from "../components/template/Input";

export default function Produto() {
  const products = useSelector((state: RootState) => state.order.products);
  const dispatch = useDispatch();

  const checkBlocked = () => {
    let error = false;

    for (const [key, values] of Object.entries(products)) {
      if (!values.quantity) {
        error = true;
      }
    }

    return error;
  };

  const handleImage = async (productId: string, file: File, objectUrl: string) => {
    try {
      const formData = new FormData();

      formData.append("arquivo", file);

      const imageId = await uploadPhoto(formData);

      dispatch(addPhoto({ uuid: imageId, id: productId, file, objectUrl }));
    } catch (err) {
      toast.error(err.message);
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let error = false;

    for (const [key, values] of Object.entries(products)) {
      if (!values.quantity || !values.reason || !values.action) {
        error = true;
      }
    }

    if (error) {
      toast.error("Verifique por campos obrigatórios");
    } else {
      Router.push("/metodo");
    }
  };

  return (
    <Layout>
      <BarraProgresso
        tela={2}
        isBlocked={() => checkBlocked()}
        blockMessage="Verifique por campos obrigatórios"
      />
      <Page title="Lista de Produtos">
        <form onSubmit={handleSubmit}>
          <Accordion>
            {Array.from(Object.keys(products)).map((key, index) => {
              const formatedPrice = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(products[key].price);

              return (
                <Accordion.Item
                  key={products[key].id}
                  title={products[key].description}
                  subtitle={formatedPrice}
                  avatar={products[key].imageLink}
                  isInvalid={!products[key].quantity || !products[key].action || !products[key].reason}
                >
                  <Formulario>
                    <Row>
                      <FormGroup>
                        <Label>
                          Qtde <Span>*</Span>
                        </Label>
                        <Input
                          type="number"
                          min="0"
                          value={products[key].quantity}
                          onChange={(event) =>
                            dispatch(
                              updateField({
                                id: products[key].id.toString(),
                                field: "quantity",
                                value: event.currentTarget.value,
                              })
                            )
                          }
                          style={{ margin: '5px 0' }}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label>
                          Ação <Span>*</Span>
                        </Label>
                        <Select
                          placeholder="Ex: 121245"
                          value={products[key].action}
                          onChange={(event) =>
                            dispatch(
                              updateField({
                                id: products[key].id.toString(),
                                field: "action",
                                value: event.currentTarget.value,
                              })
                            )
                          }
                        >
                          <Option value="">...</Option>
                          <Option value="Troca">Troca</Option>
                          <Option value="Devolução">Devolução</Option>
                          <Option value="Venda">Venda</Option>
                          <Option value="Outros">Outros</Option>
                        </Select>
                      </FormGroup>

                      <FormGroup>
                        <Label>
                          Motivo <Span>*</Span>
                        </Label>
                        <Select
                          placeholder="Ex: 121245"
                          value={products[key].reason}
                          onChange={(event) =>
                            dispatch(
                              updateField({
                                id: products[key].id.toString(),
                                field: "reason",
                                value: event.currentTarget.value,
                              })
                            )
                          }
                        >
                          <Option value="">...</Option>
                          <Option value="Assistência Técnica">Assistência Técnica</Option>
                          <Option value="Garantia">Garantia</Option>
                          <Option value="Venda">Venda</Option>
                          <Option value="Outros">Outros</Option>
                        </Select>
                      </FormGroup>
                    </Row>

                    <ImagesContainer>
                      <ImageUpload
                        onUpload={(file, objectUrl) =>
                          handleImage(products[key].id, file, objectUrl)
                        }
                        onRemove={(filename) =>
                          dispatch(
                            removePhoto({ id: products[key].id, filename, uuid: products[key].images?.[0] })
                          )
                        }
                        imgSrc={products[key].photos?.[0]?.objectUrl}
                      />
                      <ImageUpload
                        onUpload={(file, objectUrl) =>
                          handleImage(products[key].id, file, objectUrl)
                        }
                        onRemove={(filename) =>
                          dispatch(
                            removePhoto({ id: products[key].id, filename, uuid: products[key].images?.[1] })
                          )
                        }
                        imgSrc={products[key].photos?.[1]?.objectUrl}
                      />
                      <ImageUpload
                        onUpload={(file, objectUrl) =>
                          handleImage(products[key].id, file, objectUrl)
                        }
                        onRemove={(filename) =>
                          dispatch(
                            removePhoto({ id: products[key].id, filename, uuid: products[key].images?.[2] })
                          )
                        }
                        imgSrc={products[key].photos?.[2]?.objectUrl}
                      />
                    </ImagesContainer>

                    <FormGroup>
                      <Label>Comentário</Label>
                      <Textarea
                        value={products[key].comment}
                        onChange={(event) =>
                          dispatch(
                            updateField({
                              id: products[key].id.toString(),
                              field: "comment",
                              value: event.currentTarget.value,
                            })
                          )
                        }
                      />
                    </FormGroup>
                  </Formulario>
                </Accordion.Item>
              );
            })}
          </Accordion>

          <ButtonGroup>
            <Link href="/pedido" passHref>
              <Button>Voltar</Button>
            </Link>

            <Button type="submit">Continuar</Button>
          </ButtonGroup>
        </form>
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
