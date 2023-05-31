import BannersHome from "../../components/BannersHome";
import CarouselHome from "../../components/CarouselHome";
import CardsProductsHome from "../../components/CardsProductsHome";
import CardsRowHome from "../../components/CardsRowHome";
import Avaliations from "../../components/Avaliations";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <CarouselHome />
      <BannersHome />
      <CardsProductsHome/>
      <CardsRowHome />
      <Avaliations />
      <Footer />
    </div>
  );
}

export default Home