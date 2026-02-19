import { type JSX } from 'react';
import './Sobre.css'; // Importando CSS para estilos

function Sobre(): JSX.Element {
  return (
    <section className="sobre">
      <div className="sobre-container">
        <h1 className="sobre-titulo">Sobre Nós</h1>
        <div className="sobre-conteudo">
          <div className="sobre-secao">
            <h2>Nossa Missão</h2>
            <p>
              Nossa missão é fornecer soluções inovadoras e de alta qualidade para nossos clientes,
              ajudando-os a alcançar seus objetivos com eficiência e excelência.
            </p>
          </div>
          <div className="sobre-secao">
            <h2>Nossa Visão</h2>
            <p>
              Ser a empresa líder no mercado, reconhecida pela inovação, qualidade e compromisso
              com a satisfação do cliente.
            </p>
          </div>
          <div className="sobre-secao">
            <h2>Nossa Equipe</h2>
            <p>
              Contamos com uma equipe dedicada e experiente, composta por profissionais apaixonados
              pelo que fazem e comprometidos com a entrega de resultados excepcionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;