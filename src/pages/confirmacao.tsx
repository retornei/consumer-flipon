import Link from "next/link";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { RootState } from "../store";
import { FaWhatsappSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";

import Layout from "../components/template/Layout";
import BarraProgresso from "../components/template/BarraProgresso";
import Page from "../components/template/Page";
import Button from "../components/template/Button";
import Avaliation from "../components/template/Avaliation";
import { Accordion } from "../components/template/Accordion/Accordion";

import {
  ButtonGroup,
  H2,
  Text,
  InfoContainer,
  ObservationContainer,
  FormGroup,
  Formulario,
  Label,
  Row,
  Span,
  Option,
  ImagesContainer,
  Textarea,
} from "../components/styles/pages/confirmacaoStyles";

import Select from "../components/template/Select";
import {
  addPhoto,
  removePhoto,
  removeProduct,
  updateField,
  setOrderAddress,
  setComment,
  resetOrder,
} from "../store/slices/orderSlice";
import ImageUpload from "../components/template/ImageUpload";
import Input from "../components/template/Input";
import { useEffect, useState } from "react";
import { ListAddresses, sendOrder, uploadPhoto } from "../services/api/methods";
import toast from "react-hot-toast";
import {
  AddressType,
  ConfirmationAddressCard,
} from "../components/template/ConfirmationAddressCard";
import Router from "next/router";
import {PageContext} from "../context/PageContext";

export default function Confirmacao() {
  const products = useSelector((state: RootState) => state.order.products);
  const pedidoId = useSelector((state: RootState) => state.order.pedidoId);
  const endereco = useSelector((state: RootState) => state.order.endereco);
  const comment = useSelector((state: RootState) => state.order.comment);
  const total = useSelector((state: RootState) => state.order.valorTotal);
  const dispatch = useDispatch();
  const [address, setAddress] = useState<AddressType>();
  const [addresses, setAddresses] = useState<AddressType[]>();

  const { update } = useContext(PageContext)

  function status() {
    update({
      confirmacao: false, metodo: false, produto: false, status: true
    })

  }

  const handleImage = async (
    productId: string,
    file: File,
    objectUrl: string
  ) => {
    try {
      const formData = new FormData();

      formData.append("arquivo", file);

      const imageId = await uploadPhoto(formData);

      dispatch(addPhoto({ uuid: imageId, id: productId, file, objectUrl }));
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleOrder = async () => {
    const prods = [];
    const { principal, uuid, ...addr } = endereco;
    const comm = comment;
    const payload = {};

    for(let [key, value] of Object.entries(products)) {
      const { imageLink, photos, images = [], ...rest } = value
      
      prods.push({...rest, images});
    }

    payload["comment"] = comm;
    payload["endereco"] = addr;
    payload["products"] = prods;
    payload["pedidoId"] = pedidoId;

    const isValidProducts = validateProducts(prods);

    if (isValidProducts === -1) {
      toast.error("Insira pelo menos um produto para retornar");
      return;
    } else if (!isValidProducts) {
      toast.error("Verifique campos obrigatórios dos produtos");
      return;
    } else {
      try {
        await sendOrder(payload);
        toast.success("Pedido enviado com sucesso!");
        status();
        
        dispatch(resetOrder());
        
        Router.push("/status");
      } catch(err) {
        toast.error(err.message);
      }
    }
  }

  const validateProducts = (prods) => {
    let isValid = 1;

    if (!prods.length) return -1;

    for (let i = 0; i < prods.length; i++) {
      if (!prods[i].quantity || !prods[i].reason || !prods[i].action) {
        isValid = 0;
      }
    }

    return isValid;
  }

  useEffect(() => {
    (async () => {
      try {
        const addresses = await ListAddresses();

        setAddress(addresses.find((address) => address.principal === true));

        if (!endereco.descricao) {
          dispatch(
            setOrderAddress(
              addresses.find((address) => address.principal === true)
            )
          );
        }

        setAddresses(addresses);
      } catch (err) {
        toast.error(err.message);
      }
    })();

    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <BarraProgresso tela={4} />

      <Page title="Confirmação">
        <Text>Meu Endereço:</Text>
        {endereco && (
          <ConfirmationAddressCard address={endereco} addresses={addresses} />
        )}

        <Text>Objeto retornado:</Text>

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
                isInvalid={
                  !products[key].quantity ||
                  !products[key].action ||
                  !products[key].reason
                }
                onRemove={() => dispatch(removeProduct(products[key]))}
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
                        style={{ margin: "5px 0" }}
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
                        <Option value="Assistência Técnica">
                          Assistência Técnica
                        </Option>
                        <Option value="Garantia">Garantia</Option>
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
                          removePhoto({
                            id: products[key].id,
                            filename,
                            uuid: products[key].images?.[0],
                          })
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
                          removePhoto({
                            id: products[key].id,
                            filename,
                            uuid: products[key].images?.[1],
                          })
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
                          removePhoto({
                            id: products[key].id,
                            filename,
                            uuid: products[key].images?.[2],
                          })
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

        <div>
          <p style={{textAlign: 'right'}}><b>Valor total:</b> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</p>
        </div>

        <ObservationContainer>
          <label htmlFor="observation">Observação:</label>
          <textarea
            id="observation"
            value={comment}
            onChange={(event) =>
              dispatch(setComment(event.currentTarget.value))
            }
          ></textarea>
        </ObservationContainer>
        <InfoContainer>
          <H2>
            Suporte (99) 99999-9999{" "}
            <FaWhatsappSquare size="20" color="#006400" />
          </H2>

          <H2>O que você achou até agora?</H2>

          <Avaliation max={10} onVote={(vote) => console.log(vote)} />
        </InfoContainer>

        <ButtonGroup>
          <Link href="/metodo" passHref>
            <Button>Voltar</Button>
          </Link>

          <Button onClick={handleOrder}>Enviar Pedido</Button>
        </ButtonGroup>
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
