import React from "react";
import Icon from "../../assets/IconPersonalize.svg";

function SectionPersonalize() {
  return (
    <div className="bg-bege-100 m-auto">
      <div className="container m-auto w-10/12 py-16">
        <p className="text-h1 font-semibold text-center text-rosa-200 pb-10">
          Conheça nosso Trabalho
        </p>
        <div className="bg-[#FFFFFF] md:flex py-5 px-8  rounded-[30px]">
          <div>
            <p className="text-h4">
            Bem-vindo(a) ao nosso e-commerce de doces, sobremesas e bolos! 
            Delicie-se com nossas criações irresistíveis, feitas por confeiteiros especializados. 
            Oferecemos uma variedade de opções frescas e saborosas para todos os gostos. 
            Entregamos em todo o país, garantindo que você receba nossas delícias onde quer que esteja. 
            Celebre e adoce a vida com nossos produtos incríveis!
            </p>
            <p className="font-semibold text-h4">Teremos a maior satisfação em poder atender!</p>
          </div>
            <img className="w-20 relative top-14 left-6" src={Icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SectionPersonalize;
