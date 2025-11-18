import { Link } from "react-router-dom"
import "./style.css"
export function Header () {
    return (
     <header>
        <h2>Murilo.dev</h2>

        <div>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/produto">Produto</Link>
        </div>
     </header>
     
    )
}