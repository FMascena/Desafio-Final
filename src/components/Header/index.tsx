import LogoHeader from '../LogoHeader';
import CartLogo from '../../assets/carrinhobtn.png';
import LoginIcon from '../../assets/loginbtn.png';
import { NavLink } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import MenuItems from '../MenuItems';
import '../../index.css';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { Link } from 'react-router-dom';


function Header() {
  const { cartTotalQuantity } = useSelector((state: RootStore) => state.cart);

  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active)
  };

  // Lógica para Submit Form
  // const handleSearchInputChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
        // Lógica para lidar com a submissão da pesquisa
  //   console.log('Buscar:', searchQuery);
  // };

  return (
    <header className='w-full font-montserrat text-[18px] bg-[#F9F7F4] py-4'>
      <div className='container mx-auto flex items-center justify-between my-0'>
        <div className='flex items-center gap-20'>
          <Link to={'/'}>
            <LogoHeader />
          </Link>
          <nav className='flex justify-between'>
            <div className='absolute right-6 lg:hidden top-6 scale-150'>
              <MenuOutlinedIcon className='scale-150 cursor-pointer text-rosa-200' onClick={showMenu} />
            </div>
            <ul className='hidden lg:flex gap-14 text-[18px] text-preto-100 tracking-wider leading-3'>
              <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>HOME</NavLink></li>
              <li><NavLink to='/catalogo' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>LOJA</NavLink></li>
              <li><NavLink to='/sobre' className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100'}>SOBRE</NavLink></li>
            </ul>
            <MenuItems showMenu={showMenu} active={active} />
          </nav>
          <form >  
            {/* onSubmit={handleSearchSubmit} */}
            <input
              type="text"
              // value={searchQuery}
              // onChange={handleSearchInputChange}
              placeholder="Buscar produto"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button type="submit" className="ml-2 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
              Buscar
            </button>
          </form>
        </div>
        <nav>
          <div className="flex items-center">
            <NavLink to="/carrinho" className={({ isActive }) => isActive ? 'text-rosa-100 font-bold hidden lg:flex items-center gap-3' : 'text-preto-100 hidden lg:flex items-center gap-3'}>
              CARRINHO <img src={CartLogo} alt="icone carrinho" />
              <span className='text-p5 text-bege-100 relative right-8 bottom-3 w-5 h-5 bg-preto-100 rounded-full text-center'>{cartTotalQuantity}</span>
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'text-rosa-100 font-bold' : 'text-preto-100 hidden lg:flex items-center gap-3'}>
              LOGIN <img src={LoginIcon} alt="icone login" />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header