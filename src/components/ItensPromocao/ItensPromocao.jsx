import { useEffect, useState } from "react";
import produtos from '../../dados_empresa/produtos.json'

export default function ItensPromocao() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    setProds(produtos);
    console.log(produtos)
  }, []); 
  return (
    <div>
        <p style={{marginLeft: 80, fontSize: 24, fontWeight: 700, fontFamily: Rubika}}>PROMOÇÃO ESCARELLA</p>
      {prods.map((item) => {
        // Verifica se 'item.promocao' é estritamente igual ao booleano true
        if (item.promocao === true) {
          return (
            <div key={item.id} style={{marginLeft: 80}}>
              <span>Título: </span>
              <p>{item.titulo}</p>
              <span>Descrição: </span> {/* Correção de "Titulo" para "Descrição" */}
              <p>{item.descricao}</p>
            </div>
          );
        }
        // Se 'promocao' não for true, não retorna nada para este item (ou retorna null)
        return null;
      })}
    </div>
  );
}