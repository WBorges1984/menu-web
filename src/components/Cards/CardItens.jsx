import "./cardItens.style.css"

export default function CardItens({titulo, descricao, preco, img}) {
  return (    
    <div className="containerCardItens">
        <div className="leftCard">
            <p>{titulo}</p>
            <p>{descricao}</p>
            <p>{preco}</p>
        </div>
        <div className="rightCard">
            <img src="https://storage.googleapis.com/prod-cardapio-web/uploads/item/image/2106976/thumb_d2e3e843novo_co_mb.jpeg" alt="" width={130} />
        </div>
    </div>
);
}
