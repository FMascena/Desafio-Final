import { Link, useLocation } from "react-router-dom"
import Rating from '@mui/material/Rating'
import { Product } from "../../@types/products"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/modules/cart"
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

function ProductItem() {
  const location = useLocation()
  const product: Product = location.state
  console.log(product)
  const dispatch = useDispatch()
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className='bg-bege-100 py-6 w-full'>
      <div className='font-montserrat text-h3 text-preto-100 md:container md:mx-auto mb-4'>
        <Link to='/'>Home</Link>/<Link to='/catalogo'>Loja</Link>/<p className='inline'>{product.description}</p>
      </div>
      <div className='container mx-auto flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:flex-row gap-3 w-10/12 md:w-8/12 md:m-auto'>
          <div className='hidden md:hidden lg:flex lg:flex-col gap-5 w-4/12'>
          <InnerImageZoom
              src={product.Product_Albums[2]?.url_image}
              alt={product.description}
              aria-label={product.description}
              zoomSrc={product.Product_Albums[2]?.url_image}
              className='object-cover w-[400px] h-[309px] rounded-[30px]'
              zoomScale={2}
              zoomType='hover'
              hideHint={false}
            />
            <InnerImageZoom
              src={product.Product_Albums[1]?.url_image}
              alt={product.description}
              aria-label={product.description}
              zoomSrc={product.Product_Albums[1]?.url_image}
              className='object-cover w-[400px] h-[309px] rounded-[30px]'
              zoomScale={2}
              zoomType='hover'
              hideHint={false}
            />

          </div>
            
            <InnerImageZoom
              src={product.Product_Albums[0]?.url_image}
              alt={product.description}
              aria-label={product.description}
              zoomSrc={product.Product_Albums[0]?.url_image}
              className='object-cover h-[634px] rounded-[30px] md:w-8/12'
              zoomScale={1}
              zoomType='hover'
              hideHint={false}
            />
        </div>
        <div className='text-black-100 mx-auto flex flex-col max-h-[630px] justify-between w-10/12 md:w-3/12'>
          <div>
            <h2 className={`font-montserrat font-semibold max-w-[464px] whitespace-nowrap ${product.description.length < 15 ? 'text-h1' : 'text-p2'}`}>{product.description}</h2>
            <Rating name="read-only" aria-label={`Produto possui nota ${product.overall_evaluation} de 5`} value={product.overall_evaluation} readOnly style={{ color: '#BC8383' }} size='large' />
            <div className='mb-4'>
              <p className='text-p3 text-preto-100 max-w-[400px] leading-relaxed mt-4' aria-label='Descrição do produto'>{product.notes}</p>
            </div>
            <div aria-label='Detalhes do produto'>
              <h3 className='text-h4 font-semibold text-preto-100 leading-10'>Detalhes do produto</h3>
              <div className='flex text-preto-100 text-p3 gap-5'>
              <p className='px-4 py-3 rounded-[33px] text-center bg-rosa-400 text-rosa-100 font-medium text-p3'>{product.Sizes[0].name}</p>
              <p className='px-4 py-3 rounded-[33px] text-center bg-rosa-400 text-rosa-100 font-medium text-p3'>{product.Colors[0].name}</p>
              <p className='px-4 py-3 rounded-[33px] text-center bg-rosa-400 text-rosa-100 font-medium text-p3'>{product.Materials[0].description}</p>
              </div>
            </div>
          </div>
          <div className='gap-12 flex flex-col'>
            <h3 className='text-h1 font-semibold text-preto-100'>R$ {product.price},00</h3>
            <button aria-label='Adicionar ao carrinho' title='Adicionar ao carrinho' onClick={() => handleAddToCart(product)} className='font-montserrat text-h3 whitespace-nowrap font-bege-200 bg-rosa-200 px-9 py-3 w-full rounded-2xl text-[#FFFFFF] font-bold hover:bg-rosa-100'>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem