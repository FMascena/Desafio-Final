import { useSelector } from "react-redux"
import DestaquesRow from "../../components/DestaquesRow"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductItem from "../../components/ProductItem"


function Product() {
  const products = useSelector((state: any) => state.products)
  
  return (
    <div>
      <Header />
      <ProductItem />
      <DestaquesRow title='Você também pode gostar...' product={products.destaquesList}/>
      <Footer />
    </div>
  )
}

export default Product