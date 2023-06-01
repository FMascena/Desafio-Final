import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/feather/arrowLeft";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import Product1 from '../../assets/boloVegano.png';
import Product2 from '../../assets/trufadoZero.png';
import Product3 from '../../assets/trufadoChocolate.png';
import Product4 from '../../assets/trufadoMorango.png';
import Product5 from '../../assets/massaFolhada.png';
import Product6 from '../../assets/trufaChocolate.png';
import Product7 from '../../assets/trufaMaracuja.png';

function CardsProductsHome() {
  const PrevArrow = ({ onClick }: any): JSX.Element => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <Icon icon={arrowLeft} size={24} />
    </div>
  );

  const NextArrow = ({ onClick }: any): JSX.Element => (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <Icon icon={arrowRight} size={24} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="container m-auto py-16">
      <p className="text-h1 font-bold text-center text-rosa-200">Aqueles que você precisa experimentar</p>
      <Slider {...settings}>
        <div>
          <div className="flex flex-col m-auto">
            <Link to={"/catalogo"}>
              <img className="m-auto mb-10 relative top-[55px] hover:scale-105 transition-transform" src={Product1} alt="produto" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col m-auto">
            <Link to={"/catalogo"}>
              <img className="m-auto mb-10 relative top-[55px] hover:scale-110 transition-transform" src={Product2} alt="produto" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col m-auto">
            <Link to={"/catalogo"}>
              <img className="m-auto mb-10 relative top-[55px] hover:scale-110 transition-transform" src={Product3} alt="produto" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col m-auto">
            <Link to={"/catalogo"}>
              <img className="m-auto mb-10 relative top-[55px] hover:scale-110 transition-transform" src={Product4} alt="produto" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col m-auto">
            <Link to={"/catalogo"}>
              <img className="m-auto mb-10 relative top-[55px] hover:scale-110 transition-transform" src={Product5} alt="produto" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col m-auto">
            <Link to={"/catalogo"}>
              <img className="m-auto mb-10 relative top-[55px] hover:scale-110 transition-transform" src={Product6} alt="produto" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col m-auto">
            <Link to={"/catalogo"}>
              <img className="m-auto mb-10 relative top-[55px] hover:scale-110 transition-transform" src={Product7} alt="produto" />
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CardsProductsHome;
