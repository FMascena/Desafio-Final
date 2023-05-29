import LogoFooter from '../LogoFooter';
import InstagramIcon from '../../assets/instagramicon.png';
import WhatsAppIcon from '../../assets/whatsappicon.png';
import EmailIcon from '../../assets/emailIcon.png';
import PhoneIcon from '../../assets/phoneIcon.png';
import GamaBadge from '../../assets/gamabadge.png';
import Securitybadge from '../../assets/securitybadge.png';
import GenericBadge from '../../assets/genericbadge.png';
import { Link } from 'react-router-dom';

    let phone = "5531985344371";
    let text = "Olá, vim pela Sweet Dreams - Confeitaria!";
    text = window.encodeURIComponent(text);
    

function Footer() {
  return (
    <footer className="bg-[#4D382B] w-full flex flex-col md:flex-row items-center justify-around text-[28px] font-normal text-[#F9F7F4] py-8">
      <div className='container flex md:justify-between justify-center px-10'>
        <div className='flex gap-[63px]'>
          <div className='hidden md:inline'>
            <Link to={'/'}>
            <LogoFooter />
            </Link>
            <p className='text-p4 text-bege-100'>&copy; Copyright 2023 | Todos os direitos reservados.</p>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex gap-[150px]'>
              <div className='flex flex-col font-montserrat text-[20px] whitespace-nowrap items-center md:items-start gap-6'>
                <Link to='/sobre'>Sobre nós</Link>
                <Link to='/suporte'>Dúvidas</Link>
              </div>
              <div className='flex flex-col font-montserrat text-[20px] items-center md:items-start gap-6'>
                <Link to='/catalogo'>Loja</Link>
                <Link to='/login'>Acesso</Link>
              </div>
            </div>
            <div className='flex gap-6 mt-16 text-h4 justify-evenly items-center md:items-start'>
              <a href="https://www.instagram.com/cacaushow/" target="blank"><img src={InstagramIcon} alt="nosso perfil no instagram" /></a>
              <a href={`https://api.whatsapp.com/send?phone=${phone+"&text="+text}`} target="blank"><img src={WhatsAppIcon} alt="Envie uma mensagem no Whatsapp" /></a>
              <a href="https://www.cacaushow.com.br/" target="blank"><img src={PhoneIcon} alt="Ligue para a gente" /></a>
              <a href="https://www.cacaushow.com.br/" target="blank"><img src={EmailIcon} alt="Envie-nos um email" /></a>
            </div>
          </div>
        </div>
        <div className='font-montserrat text-[20px] text-center md:text-right gap-4 lg:flex-col lg:flex hidden mt-7'>
          <p>Certificados</p>
          <div className='flex gap-5'>
            <img className='w-20 h-20' src={GenericBadge} alt="" />
            <img className='w-20 h-20' src={Securitybadge} alt="" />
            <img className='w-20 h-20' src={GamaBadge} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer