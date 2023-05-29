import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ContactForm from "../../components/ContactFormSupport"
import BannerCatalogo from "../../components/BannerCatalogo"
import QuestionsSection from "../../components/QuestionsSection"
import React from "react"

function Support() {
  return (
    <div>
      <Header />
      <BannerCatalogo title='Dúvidas' frase={<React.Fragment>Ficou alguma dúvida?&nbsp;<span className='font-bold'>Comece por aqui</span>!</React.Fragment>} />
      <QuestionsSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Support