import './buttonMenu.style.css'
import { FaHome } from "react-icons/fa";

export default function ButtonMenu({name}) {
  return (
    <div className='containerButtonMenu'>
        <FaHome size={48}/>
        <button className='btn btn-light'>{name}</button>
    </div>
  )
}
