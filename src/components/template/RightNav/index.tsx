import { Ul }  from './styles'
import { destroyCookie, parseCookies } from "nookies";
import Link from "next/link"
import Router from 'next/router';
import { MouseEvent } from 'react';

const RightNav = ({ open }) => {
    const { ["@retornei-app.token"]: token } = parseCookies();
    const logout = (event: MouseEvent) => {
        event.preventDefault();

        destroyCookie({}, '@retornei-app.token');

        Router.replace('/sign-in');
    }

    return (
        <Ul open={open}>
            <li><Link href="/sign-in">Acessar Conta</Link></li>
            {token && <li><Link href="/senha" passHref>Trocar Senha</Link></li>}
            {token && <li><Link href="/pedido" passHref>Novo Pedido</Link></li>}
            {token && <li><Link href="/minha-conta">Minha Conta</Link></li>}
            {token && <li><Link href="/meus-enderecos">Meus Endereços</Link></li>}
            {token && <li><Link href="/meus-retornos">Meus Retornos</Link></li>}
            {token && <li onClick={logout}>Sair</li>}
        </Ul>
    )
}

export default RightNav
