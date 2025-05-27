import { useState } from "react";
import ButtonMenu from "../buttonMenu/ButtonMenu";
import "./header.style.css";

const MENU_ITEMS = {
  INICIO: 'inicio',
  PROMOCOES: 'promocoes',
  PEDIDOS: 'pedidos',
  ENTRAR_CADASTRAR: 'entcad',
};

export const Header = () => {

  const [activeItem, setActiveItem] = useState(MENU_ITEMS.INICIO);

  const handleMenuClick = (menuName) => {
    setActiveItem(menuName);
  };

  return (
    <div className="containerHeader">
      <header className="headerMenu">
        <ButtonMenu
          name={"Início"}
          active={activeItem === MENU_ITEMS.INICIO}
          onclick={() => handleMenuClick(MENU_ITEMS.INICIO)}
        />
        <ButtonMenu
          name={"Promoções"}
          active={activeItem === MENU_ITEMS.PROMOCOES}
          onclick={() => handleMenuClick(MENU_ITEMS.PROMOCOES)}
        />
        <ButtonMenu
          name={"Pedidos"}
          active={activeItem === MENU_ITEMS.PEDIDOS}
          onclick={() => handleMenuClick(MENU_ITEMS.PEDIDOS)}
        />
        <ButtonMenu
          name={"Entrar/Cadastrar"}
          active={activeItem === MENU_ITEMS.ENTRAR_CADASTRAR}
          onclick={() => handleMenuClick(MENU_ITEMS.ENTRAR_CADASTRAR)}
        />
      </header>
    </div>
  );
};