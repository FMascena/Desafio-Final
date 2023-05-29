// import { Close } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import CartLogo from '../../assets/carrinhobtn.png'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../../index.css'
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';

interface MenuItemsProps {
    showMenu: () => void;
    active: boolean;
}

const MenuItems = ({ showMenu, active }: MenuItemsProps) => {
    const { cartTotalQuantity } = useSelector((state: RootStore) => state.cart)

    return (
        <ul className={active ? 'text-right flex-col z-50 flex items-end fixed inset-0 left-1/4 uppercase bg-[#EAE6E3]/40 backdrop-blur-lg gap-8 justify-center p-8 lg:hidden' : 'hidden'}>
            <CloseOutlinedIcon onClick={showMenu} className='cursor-pointer' />
            <li><NavLink to='/' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>HOME</NavLink></li>
            <li><NavLink to='/catalogo' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>LOJA</NavLink></li>
            <li><NavLink to='/personalize' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>PERSONALIZADO</NavLink></li>
            <li><NavLink to='/sobre' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>SOBRE NÓS</NavLink></li>
            <li><NavLink to='/suporte' className={({isActive}) => isActive ? 'text-rosa-100 font-bold': 'text-preto-100'}>DÚVIDAS</NavLink></li>
            <li><NavLink to='/carrinho' className={({isActive}) => isActive ? 'text-rosa-100 font-bold flex row items-center gap-2 relative': 'text-preto-100 flex row items-center gap-2 relative'}>CARRINHO<img src={CartLogo} alt="" /><span className='text-p5 text-bege-100 absolute left-32 bottom-5 w-5 h-5 bg-preto-100 rounded-full text-center'>{cartTotalQuantity}</span></NavLink></li>
        </ul>
    );
};

export default MenuItems;