import { GiPresent } from "react-icons/gi";

export default function Fidelidade() {
  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', gap:15, padding: 15, borderRadius: 10}}>
        <GiPresent size={50} />
        <span style={{fontSize: 20, fontWeight: 600}}>Programa de fidelidade</span>
      </div>

      <div>
        <span style={{fontSize: 18}}>
          A cada <b>R$ 1,00</b> em compras você ganha <b>1 ponto</b>{" "}
          que pode ser trocado por prêmios. 
          {" "}Os novos clientes ganham automaticamente <b>10 pontos.</b>
        </span>
      </div>
    </>
  );
}
