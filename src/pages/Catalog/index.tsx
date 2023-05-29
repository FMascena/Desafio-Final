import React from "react"
import { TailSpin } from "react-loader-spinner"
import { useSelector } from "react-redux"
import BannerCatalogo from "../../components/BannerCatalogo"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import LacosRow from "../../components/LacosRow"
import DestaquesRow from "../../components/DestaquesRow"
import TiarasRow from "../../components/TiarasRow"
import BoinasRow from "../../components/BoinasRow"
import AcessoriosRow from "../../components/AcessoriosRow"


function Catalog() {
  const products = useSelector((state: any) => state.products)
  const productsStatus = useSelector((state: any) => state.products.status)

  return (
    <div className='bg-bege-100'>
      <Header />
      {productsStatus !== 'fulfilled' ? (
        <div className='h-screen flex justify-center items-center'>
          < TailSpin color='#BC8383' width='100' height='100'/>
        </div>
      ) : (
        <>
        <BannerCatalogo title='Loja' frase={<React.Fragment>Consulte nosso catálogo feito com&nbsp;<span className="font-bold">cuidado e amor</span>&nbsp;para você!</React.Fragment>}/>
        <LacosRow title='Laços' product={products.lacoList}/>
        <DestaquesRow title='Destaques' product={products.destaquesList}/>
        <TiarasRow title='Tiaras' product={products.tiarasList}/>
        <BoinasRow title='Boinas' product={products.colecaoparisList}/>
        <AcessoriosRow title='Outros acessórios' product={products.acessoriosList}/>
        </>
      )}
      <Footer />
    </div>
  )
}

export default Catalog