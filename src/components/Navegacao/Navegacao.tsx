import { Link } from "react-router-dom";
import "./Navegacao.css";

function Navegacao() {
  return (
    <nav className="navegacao">
      <div className="nav-container">
        <h1 className="nav-logo">Meu Site</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicos" className="nav-link">Serviços</Link>
          </li>
          <li className="nav-item">
            <Link to="/contatos" className="nav-link">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navegacao;