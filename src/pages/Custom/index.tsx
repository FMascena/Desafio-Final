import CardsRowPersonalize from "../../components/CardsRowPersonalize"
import SectionPersonalize from "../../components/SectionPersonalize"
import GalleryPersonalize from "../../components/GalleryPersonalize"
import ContactForm from "../../components/ContactFormPersonalize"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import BannerCatalogo from "../../components/BannerCatalogo"
import React from "react"



function Custom() {
  return (
    <div>
      <Header />
      <BannerCatalogo title='Personalize' frase={<React.Fragment>Quer algo mais exclusivo? Personalize seus acessórios&nbsp;<span className="font-bold">do seu jeitinho!</span></React.Fragment>} />
      <SectionPersonalize />
      <CardsRowPersonalize />
      <GalleryPersonalize />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Custom