import { Link } from "react-router-dom"
import NotFoundIcon from '../../assets/404icon.png'

function NotFound() {
  return (
    <div className='bg-bege-100 h-screen'>
      <div className='container mx-auto flex flex-col items-center content-center gap-14'>
        <div className="pt-48">
        <h1 className='text-h3 md:text-h1 font-bold text-left text-rosa-100'>Ops...</h1>
        <p className='text-preto-100 text-h6 md:text-h4 font-semibold' >Nós não encontramos a página que você estava procurando</p>
        <p className='text-preto-100 text-h6 md:text-h4 font-semibold' >Por que não volta e olha nossa <Link to="/catalogo" className='underline underline-offset-1'>loja?</Link></p>
        </div>
        <img src={NotFoundIcon} alt="" />
      </div>
    </div>
  )
}

export default NotFound