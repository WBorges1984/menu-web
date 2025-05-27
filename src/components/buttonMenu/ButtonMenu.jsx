import { useState } from 'react';
import './buttonMenu.style.css'
import { FaHome } from "react-icons/fa";

export default function ButtonMenu({name, active, onclick}) {

  return (
    <div onClick={onclick} style={{backgroundColor: active ? 'white' : 'black', color: active ? 'black' : 'white'  }} className='containerButtonMenu'>
        <FaHome size={28}/>
        <button className='btnMenu'>{name}</button>
    </div>
  )
}
