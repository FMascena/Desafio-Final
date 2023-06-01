import React from "react";
import Banner1 from "../../assets/bannerBolos.png";
import Banner2 from "../../assets/bannerTrufas.png";
import Banner3 from "../../assets/bannerDoces.png";
import Banner4 from "../../assets/bannerSobremesas.png";
import Banner5 from "../../assets/bannerKits.png";
import { Link } from "react-router-dom";

function BannersHome() {
  return (
    <div className=" bg-bege-100">
      <h1 className="text-center text-h1 text-rosa-200 font-bold mt-20">
        Conheça todos os nossos sabores
      </h1>
      <div className="w-10/12 gap-4 m-auto py-14 flex flex-col md:flex-row">
        <div>
          <Link to={"/catalogo"}>
            <img className='hover:scale-105 transition-transform' src={Banner1} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img className='hover:scale-105 transition-transform' src={Banner2} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img className='hover:scale-105 transition-transform' src={Banner3} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img className='hover:scale-105 transition-transform' src={Banner4} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img className='hover:scale-105 transition-transform' src={Banner5} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannersHome;