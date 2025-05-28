import RazaoSocial from "../../components/Empresa/RazaoSocial/RazaoSocial";
import SubTitle from "../../components/Empresa/subTitle/SubTitle";
import { Header } from "../../components/Header/Header";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="bodyDashboard">
        <div className="conteudo">
            <div className="topDashboard">
                <RazaoSocial />
                <SubTitle />
            </div>
        </div>
        <div>
            <div>
                <div class="flex items-center space-x-3">
                    <div class="flex-shrink-0">
                        <div class="p-2 rounded-full bg-primary">
                        <img src="" alt="Ícone de prêmio de fidelidade" width="20" height="20" />
                        </div>
                    </div>
                    <span class="text-sm font-medium text-gray-700">Programa de fidelidade</span>
                </div>
                <div class="flex flex-col flex-1 space-y-2">
                    <span class="text-gray-700 text-msm">A cada <span class="font-medium">R$ 1,00</span> em compras você ganha <span class="font-medium">1 ponto</span> que pode ser trocado por prêmios.</span><span class="text-gray-700 text-msm">Os novos clientes ganham automaticamente <span class="font-medium">10 pontos.</span></span></div></div>
        <aside>

        </aside>
        </div>
      </div>
    </div>
  );
};
