import { Product } from '../../@types/products'
import CardButton from '../CardButton'
import { useDispatch } from 'react-redux' 
import { addToCart } from '../../store/modules/cart'
import { Link } from 'react-router-dom'

interface RowCardProps {
    product: Product
}

function RowCard({product}: RowCardProps) {
    const dispatch = useDispatch()
    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className='rounded-[35px] shadow-lg bg-[#FFFFFF] transition my-10 snap-center flex-shrink-0 md:hover:scale-105 snap-always'>
            <Link to={`/produto`} state={product}>
                <img className='cursor-pointer object-center max-h-[302px] min-w-[304px] rounded-t-[30px]' src={product.Product_Albums[1]?.url_image} alt={product.description} aria-label='Ir para detalhes do produto' title='Ir para detalhes do produto'/>
            </Link>            
            <div className='flex justify-between items-center px-6 my-4 w-full relative'>
                <div className='text-montserrat cursor-default'>
                    <p className={`font-medium ${product.description.length > 20 ? 'text-p4' : 'text-p3'}`}>{product.description}</p>
                    <p className='font-montserrat font-bold text-[36px]'>R$ {product.price},00</p>
                </div>

                <button aria-label='Adicionar ao carrinho' title='Adicionar ao carrinho' className='absolute right-7 bottom-3' onClick={()=> handleAddToCart(product)}><CardButton/></button>
            </div>

        </div>
    )
}

export default RowCard