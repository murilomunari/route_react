import { Link } from "react-router-dom"

export function Home () {
    return (
    <div>
        <h1>Bem vindo a pagina home</h1>
        <span>Essa e a minha primeira pagina com navegação</span>
        <br />

        <Link to="/sobre">Ir para Sobre</Link>
        <br />
        <span>Pagina contato</span>
        <br />
        <Link to="/contato">Ir para Contato</Link>
        <br />
        <span>Pagina produto</span>
        <br />
        <Link to="/produto">Ir para Produto</Link>
    </div>
    )
}