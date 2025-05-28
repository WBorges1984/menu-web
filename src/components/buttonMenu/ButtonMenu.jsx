import './buttonMenu.style.css'
import { FaHome } from "react-icons/fa";
import { LuTicketPercent } from "react-icons/lu";
import { FaBasketShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function ButtonMenu({name, active, onclick}) {

  return (
    <div onClick={onclick} style={{backgroundColor: active ? 'white' : 'black', color: active ? 'black' : 'white'  }} className='containerButtonMenu'>
        {name == 'Início' ? <FaHome size={28}/> 
        : name == 'Promoções' ? <LuTicketPercent size={28}/> 
        : name == 'Pedidos' ? <FaBasketShopping size={28}/> 
        : <IoPerson size={28}/>}

        <button className='btnMenu'>{name}</button>
    </div>
  )
}
