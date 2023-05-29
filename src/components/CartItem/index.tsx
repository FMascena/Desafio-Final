import SobremesasCart from '../../assets/sobremesascart.png'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Product } from '../../@types/products';
import { useDispatch } from 'react-redux'
import { addToCart, decreaseCartQuantity, removeFromCart } from '../../store/modules/cart';

interface CartItemProps {
    product: Product
}



function CartItem({ product }: CartItemProps) {
    const dispatch = useDispatch()
    const handleRemoveFromCart = (product: Product) => {
        dispatch(removeFromCart(product))
    }
    const handleDecreaseCartQuantity = (product: Product) => {
        dispatch(decreaseCartQuantity(product))
    }
    const handleIncreaseCartQuantity = (product: Product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className='w-full p-2 bg-[#FFFFFF] md:rounded-lg md:p-10 mb-5 flex flex-col gap-3 md:flex-row h-64 md:justify-between'>
            <div className='flex gap-2 md:gap-3'>
                <img src={product.Product_Albums[1]?.url_image} alt="" className='object-fit h-[169px] w-[141px] rounded-[30px] shadow-lg'/>
                <div className='flex gap-3'>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <div>
                                <h2 className='font-bold md:text-p2 max-w-[180px] text-p3 whitespace-nowrap truncate md:overflow-visible'>{product.description}</h2>
                            </div>
                        </div>
                        <div>
                            <p className='font-medium md:text-p3 text-p4 font-montserrat'>Descrição do Produto</p>
                            <p className='text-p4 max-w-[180px] md:max-w-[200px] truncate'>{product.notes}</p>
                        </div>
                    </div>
                    <div>
                        <button className='md:hidden text-rosa-200' onClick={() => handleRemoveFromCart(product)}><DeleteForeverOutlinedIcon /></button>
                    </div>
                </div>
            </div>
            <div className='flex  items-center justify-between md:ml-24 md:gap-8 md:w-1/3'>
                <div className='flex flex-col gap-3'>
                    <div className='rounded-[30px] border-4 border-rosa-400 flex items-center ml-6 md:ml-0 hover:cursor-pointer md:w-32 md:h-12 justify-center gap-2'>
                        <button onClick={() => handleDecreaseCartQuantity(product)}><RemoveOutlinedIcon /></button>
                        <div className='text-center focus:outline-none w-10 md:text-h4 text-h6 font-semibold font-montserrat'>{product.cartQuantity}</div>
                        <button onClick={() => handleIncreaseCartQuantity(product)}><AddOutlinedIcon /></button>
                    </div>
                    <button className='underline underline-offset-1 text-preto-100 text-h6 font-normal hidden md:inline font-montserrat' onClick={() => handleRemoveFromCart(product)}>Remover</button>
                </div>
                <div>
                    <h2 className='pr-4 md:pr-0 font-bold md:text-h3 md:mr-0 text-right w-full md:pb-8 whitespace-nowrap'>R$ {+product.price * product.cartQuantity},00</h2>
                </div>
            </div>
        </div>
    )
}

export default CartItem