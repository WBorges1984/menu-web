import RazaoSocial from "../../components/Empresa/RazaoSocial/RazaoSocial";
import SubTitle from "../../components/Empresa/subTitle/SubTitle";
import { Header } from "../../components/Header/Header";
import "./dashboard.style.css";
import Fidelidade from "../../components/Fidelidade/Fidelidade";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import ItensPromocao from "../../components/ItensPromocao/ItensPromocao";
import CardItens from "../../components/Cards/CardItens";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="bodyDashboard">
        <div className="conteudo">
          <div className="topDashboard">
            <RazaoSocial />
            <SubTitle />
            <div className="consultaCategorias">
              <select
                style={{ width: 250 }}
                className="form-select"
                aria-label="Default select example"
              >
                <option value={"Lista de Categorias"}>Lista de Categorias</option>
                <option value="1">Bebida</option>
                <option value="2">Roupas</option>
                <option value="3">Food</option>
              </select>
              <div className="input">
                <IoSearchOutline />
                <input type="text" placeholder="Busca de produtos" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="fidelidade"
            style={{
              marginTop: 40,
              marginRight: 80,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Fidelidade />
          </div>
        </div>
        <div className="itens">
            <ItensPromocao />
        </div>
        <aside> 
            <FaRegQuestionCircle />
        </aside>
            <CardItens 
              titulo={"COMBO ESCARELLA"} 
              descricao={"Pizza 35cm calabresa  + Pizza 25cm confete + guaraná 1,5 lt "}
              preco={49.99}/>
      </div>
    </div>
  );
};
