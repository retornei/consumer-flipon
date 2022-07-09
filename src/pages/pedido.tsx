import toast from "react-hot-toast";

import { BiSearchAlt } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { GrLinkNext } from "react-icons/gr";

import Layout from "../components/template/Layout";
import BarraProgresso from "../components/template/BarraProgresso";
import CardProduct from "../components/template/CardProduct";
import Button from "../components/template/Button";
import Page from "../components/template/Page";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store/slices/orderSlice";

import {
  CardContainer,
  ButtonGroup,
  Busca,
  InputBusca,
  Loader,
  DivNext,
} from "../components/styles/pages/pedidoStyles";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import { useEffect, useState } from "react";
import { listProducts } from "../services/api/methods";
import { RootState } from "../store";
import Router from "next/router";

interface ProductPayload {
  id: string;
  imageLink: string;
  description: string;
  price: number;
}

export default function Pedido() {
  const selectedProducts = useSelector(
    (state: RootState) => state.order.products
  );
  const [products, setProducts] = useState<ProductPayload[]>([]);
  const [filtered, setFiltered] = useState<ProductPayload[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    listProducts()
      .then((produtos) => {
        setProducts(produtos);
        setFiltered(produtos);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleProductSelect = (checked: boolean, product: ProductPayload) => {
    if (checked) {
      dispatch(
        addProduct({
          ...product,
          quantity: "",
          reason: "",
          comment: "",
          action: "",
        })
      );
    } else {
      dispatch(removeProduct(product));
    }
  };

  const handleContinue = () => {
    if (Object.keys(selectedProducts).length) {
      Router.push("/produto");
    } else {
      toast.error("Selecione ao menos um produto");
    }
  };

  return (
    <Layout>
      <BarraProgresso
        tela={1}
        isBlocked={!Object.keys(selectedProducts).length}
        blockMessage="Selecione pelo menos um produto"
      />

      <Page title="Pedido">
        <DivNext>
          <Busca>
            <BiSearchAlt />
            <InputBusca
              placeholder="Busca por produto"
              onChange={(event) =>
                setFiltered(
                  products.filter((product) =>
                    product.description
                      .toLowerCase()
                      .includes(event.currentTarget.value.toLowerCase())
                  )
                )
              }
            />
          </Busca>
          <GrLinkNext onClick={handleContinue} />
        </DivNext>
        {loading && (
          <Loader>
            <FiLoader />
            <span>Carregando lista...</span>
          </Loader>
        )}

        {!loading && (
          <>
            <CardContainer>
              {filtered.map((produto) => (
                <CardProduct
                  key={produto.id}
                  productId={produto.id}
                  image={produto.imageLink}
                  description={produto.description}
                  price={produto.price}
                  onCheck={(checked) => handleProductSelect(checked, produto)}
                />
              ))}
            </CardContainer>

            <ButtonGroup>
              <Button onClick={handleContinue}>Continuar</Button>
            </ButtonGroup>
          </>
        )}
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
