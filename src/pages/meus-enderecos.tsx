import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Swal from 'sweetalert2';

import Index from "../components/template/LayoutRetornei";
import Button from "../components/template/Button";

import { ListAddresses, removeAddress } from "../services/api/methods";

import {
  Card,
  Container,
  Div,
} from "../components/styles/pages/meusEnderecosStyles";

const MeusEnderecos = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const address = await ListAddresses();

        setAddresses(address);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);

  const handleRemove = async (addressId: string, isPrincipal: boolean) => {
    if (isPrincipal) {
      toast.error("Não é possível remover endereço principal");
      return;
    }

    Swal.fire({
      title: "Atenção",
      text: "Tem certeza que deseja remover o endereço?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar"
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await removeAddress(addressId);
    
          setAddresses(addresses.filter(address => address.uuid !== addressId))
    
          Swal.fire("Sucesso!", "Endereço removido com sucesso.", "success");
        } catch (err) {
          toast.error(err.message);
        }
      }
    })
  };

  return (
    <Index titulo="1" subtitulo="2">
      <Container>
        <h1>MEUS ENDEREÇOS</h1>

        {addresses.map((address, index) => (
          <Card key={index}>
            <Div>
              <h1>{address.descricao}</h1>
            </Div>
            <p>
              <span>CEP:</span> {address.cep}
            </p>
            <p>
              <span>Rua:</span> {address.logradouro}
            </p>
            <p>
              <span>Bairro:</span> {address.bairro}
            </p>
            <p>
              <span>Cidade:</span> {address.municipio}/{address.uf}
            </p>
            <p>
              {address.complemento ? (
                <>
                  <span>Complemento:</span> {address.complemento}
                </>
              ) : null}
            </p>
            <Div>
              <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
                <Link href={`/endereco/${address.uuid}`} passHref>
                  <Button>Editar</Button>
                </Link>

                <Button
                  onClick={() => handleRemove(address.uuid, address.principal)}
                >
                  Remover
                </Button>
              </div>
            </Div>
          </Card>
        ))}

        <Link href="/endereco" passHref>
          <Button>Adicionar endereço</Button>
        </Link>
      </Container>
    </Index>
  );
};

export default MeusEnderecos;
