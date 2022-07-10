import Link from "next/link";

import Layout from "../../components/template/Layout";
import Page from "../../components/template/Page";
import Button from "../../components/template/Button";

import { useDispatch } from "react-redux";
import {
    addProduct,
    setOrderAddress,
    setOrderId,
} from "../../store/slices/orderSlice";
import {
    ButtonGroup,
    CardProduct as Card,
    CardImage, CardContent,
    Title,
    Image,
    DivRetorno,
    DivContainer,
} from "../../components/styles/pages/solicitacaoStyles";

import {GetServerSideProps} from "next";
import {parseCookies} from "nookies";
import {useEffect, useState} from "react";
import {listOrder} from "../../services/api/methods";
import toast from "react-hot-toast";
import {IPedido, IConsumidor, IEndereco, IItem} from "../../interfaces/IPedido";
import {Container} from "../../components/styles/pages/statusStyles";
import Router, { useRouter } from "next/router";


export default function Solicitacao() {
    const [order, setOrder] = useState<IPedido>({});
    const [consumidor, setConsumidor] = useState<IConsumidor>();
    const [endereco, setEndereco] = useState<IEndereco>();
    const [itens, setItens] = useState<IItem[]>([]);
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();

    useEffect(() => {
        if(id) {
            (async () => {
                try {
                    const pedido = await listOrder(id);
                    setOrder(pedido);
                    const {consumidor} = pedido;
                    const {enderecoConsumidor} = pedido;
                    const {itensViews} = pedido;
                    setConsumidor(consumidor);
                    setEndereco(enderecoConsumidor);
                    setItens(itensViews);
                } catch (err) {
                    toast.error(err.message);
                }
            })();
        }
    }, []);


    if (order.status == "REJEITADO") {

        dispatch(setOrderId(order.uuidPedido))

        itens.map((item, key) => {


            dispatch(
                addProduct({
                    id: item.uuidItem,
                    imageLink: item.imagemOriginal,
                    description: item.descricao,
                    price: item.valor,
                    quantity: item.quantidade,
                    reason: item.motivo,
                    comment: item.comentario,
                    action: item.acao,
                })
            );
        })

        dispatch(
            setOrderAddress({
                cep: endereco?.cep,
                logradouro: endereco?.logradouro,
                numero: endereco?.numero,
                bairro: endereco?.bairro,
                municipio: endereco?.municipio,
                uf: endereco?.uf,
                complemento: endereco?.complemento,
                descricao: "",
                uuid: "",
                principal: null,
            }));



    }

    return (
        <Layout>
            <Page title={`Status: ${order?.status}`}>

                {
                    order.status == "ANDAMENTO" ?
                            <Container>
                                <h3>Seu Pedido foi enviado para Equipe da FlipOn</h3>
                                <h4>Agradecemos pela confiança, retornaremos o mais breve possível.</h4>
                            </Container>
                        :
                        <>
                            {
                                order.codigoCorreios &&
                                <Container>
                                    <span>Código de Postagem: {order.codigoCorreios}</span>

                                    {order.mensagemCliente &&
                                        <>
                                            <br />
                                            <span>Mensagem da Flipon</span>
                                            <span>{order?.mensagemCliente}</span>
                                        </>
                                    }

                                </Container>
                            }
                            {
                                order.status == "REJEITADO" &&
                                <Container>
                                    <span>Não foi possível aprovação do Pedido, </span>
                                    <span>segue abaixo as informações necessária para Aprovação</span>
                                    <span>{order?.mensagemCliente}</span>
                                </Container>
                            }

                        </>
                }

                <DivRetorno>
                    <DivContainer>
                        <span></span>
                        <span><strong>Data da Solicitação:</strong>
                            {order?.data
                                ? new Date(order.data.slice(0, 3)).toLocaleDateString()
                                : "--"}
                        </span>
                    </DivContainer>
                    <DivContainer>
                        <span><strong>Razão Social: </strong>{consumidor?.nomeRazaoSocial}</span>
                    </DivContainer>
                    <DivContainer>
                        <span><strong>Celular: </strong>{consumidor?.celular}</span>
                    </DivContainer>
                    <DivContainer>
                        <span><strong>CNPJ: </strong>{consumidor?.cpfCnpj
                            .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")}</span>
                    </DivContainer>
                    <DivContainer>
                        <span><strong>Cidade: </strong>{endereco?.municipio}</span>
                    </DivContainer>
                    <DivContainer>
                        <span><strong>CEP: </strong>{endereco?.cep}</span>
                    </DivContainer>
                    <span><strong>E-mail: </strong>{consumidor?.email}</span>
                    <h3>Lista dos Produtos</h3>
                    {itens.map((item, index) => (
                        <Card key={index}>
                            <CardImage>
                                <Image src={item.imagemOriginal}></Image>
                            </CardImage>
                            <CardImage>
                                <Image src={ item.imagemConsumidor ? item.imagemConsumidor : "/img/semImg.png"

                                }></Image>
                            </CardImage>
                            <CardContent>
                                <Title>{item.descricao}</Title>
                                <Title><b>Preço: </b>{item.valor}</Title>
                                <div style={{display: 'flex', gap: 10}}>
                                    <Title><b>Qtde.: </b>{item.quantidade}</Title>
                                    <Title><b>Motivo: </b>{item.motivo}</Title>
                                    <Title><b>Ação : </b>{item.acao}</Title>
                                </div>
                                <h6>{item.comentario}</h6>
                            </CardContent>
                        </Card>
                        ))
                    }

                    <ButtonGroup>
                        <Link href="/meus-retornos" passHref>
                            <Button>Voltar</Button>
                        </Link>
                        {   order.status == "REJEITADO" &&
                            <ButtonGroup>
                                <Link href="/confirmacao" passHref>
                                    <Button>Editar</Button>
                                </Link>
                            </ButtonGroup>
                        }
                    </ButtonGroup>
                </DivRetorno>
            </Page>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['@retornei-app.token']: token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

