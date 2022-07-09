import Index from "../components/template/LayoutRetornei";
import Link from "next/link";
import { Container, Button, Li, DivList}
    from "../components/styles/pages/meusRetornosStyles";
import {useEffect, useState} from "react";
import {listOrders} from "../services/api/methods";
import toast from "react-hot-toast";



export default function MeusRetornos() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const orders = await listOrders();

                setOrders(orders.content);
            } catch (err) {
                toast.error(err.message);
            }
        })();
    }, []);

    return (
        <Index titulo="1" subtitulo="2">
            <Container>
                <h1>Meus Retornos</h1>
            <DivList>
                {orders.map((order) => (
                    <Li key={order.uuid}>
                        <div>
                            <small>Data</small>
                            <span>
                                     {order?.data
                                         ? new Date(order.data.slice(0, 3)).toLocaleDateString()
                                         : "--"}
                            </span>
                        </div>
                        <div>
                            <small>Razão Social</small>
                            <span>{order.razaoSocial.split(' ').slice(0, 1)} {order.razaoSocial.split(' ').slice(1, 2)}</span>
                        </div>
                        <div>
                            <small>CNPJ</small>
                            <span>{order.cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")}</span>
                        </div>
                        <div>
                            <Link href={`/status/${order.uuid}`} passHref>
                                <Button>{order.status}</Button>
                            </Link>
                        </div>
                    </Li>
                ))}
            </DivList>
            </Container>
        </Index>
    )
}
