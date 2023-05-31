import React from "react";
import Icon1 from '../../assets/IconCardHome1.svg';
import Icon2 from '../../assets/healthyFoodLogo.png';
import Icon3 from '../../assets/IconCardHome3.svg';
import Icon4 from '../../assets/encomendaLogo.png';

function CardsRowHome() {
  return (
    <div className="container m-auto py-16">
      <p className="text-h1 font-bold text-center text-rosa-200">Por que a Sweet Dreams?</p>
      <div className="text-center w-10/12 m-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row">
      <div className="flex flex-col m-auto">
            <img className="m-auto relative w-[80px] top-[55px]" src={Icon1} alt="" />
          <div className="bg-bege-100 px-2 pt-14 pb-4 rounded-[10px] h-[200px] lg:h-[180px]">
            <div>
              <p className="text-h4 font-semibold m-3">Materiais de Alta Qualidade</p>
              <p className="text-h5">Ingredientes selecionados, garantindo experiências excepcionais!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative w-[110px] top-[55px]" src={Icon2} alt="" />
          <div className="bg-bege-100 px-2 pt-14 pb-4 rounded-[10px] h-[200px] lg:h-[190px]">
            <div>
              <p className="text-h4 font-semibold m-3">Healthy and Fit</p>
              <p className="text-h5">Opções saudáveis e saborosas para quem busca equilíbrio e bem-estar!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative w-[80px] top-[55px]" src={Icon3} alt="" />
          <div className="bg-bege-100 px-2 pt-14 pb-4 rounded-[10px] h-[200px] lg:h-[190px]">
            <div>
              <p className="text-h4 font-semibold m-3">Sobremesas Exclusivas</p>
              <p className="text-h5">Descubra novos sabores e texturas surpreendentes em cada criação!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative w-[110px] top-[70px]" src={Icon4} alt="" />
          <div className="bg-bege-100 px-2 pt-14 pb-4 rounded-[10px] h-[200px] lg:h-[225px]">
            <div>
              <p className="text-h4 font-semibold m-3">Serviço de Encomendas</p>
              <p className="text-h5">Facilitamos seu pedido gerando a melhor experiência possível!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsRowHome;