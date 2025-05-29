import { MdLocationOn } from "react-icons/md";

export default function SubTitle() {
  return (
    <div className='containerSubTitle' style={{display: 'flex', alignItems: 'center', gap: 10}}>
        <span style={{color: 'orangered'}}>Apenas agendamento • Abrimos amanhã às 18h00</span>
        <span> • Nova Iguaçu - RJ  <b>{"  "}Mais informações</b></span>
    </div>
  )
}
