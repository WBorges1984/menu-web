
import ButtonMenu from "../buttonMenu/ButtonMenu";
import "./header.style.css";

export const Header = () => {
  return (
    <div className="containerHeader">
      <header className="headerMenu">
        <nav>
          <ButtonMenu name={'Início'} />
          <button>Promoções</button>
          <button>Pedidos</button>
          <button>Entrar/Cadastrar</button>
        </nav>
      </header>
    </div>
  );
};
