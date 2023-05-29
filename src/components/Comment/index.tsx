import Rating from '@mui/material/Rating'
import CommentLogo from '../../assets/commentlogo.svg'
import { Rating as Ratings } from '../../@types/products'

interface CommentProps {
  rating: Ratings
}

function Comment({rating}: CommentProps) {
  return (
    <div className='rounded-lg bg-[#FFFFFF] my-16 mx-2'>
        <img className='relative bottom-10 left-11' src={CommentLogo} alt="" />
        <div className='flex flex-col mx-10 mb-7 relative my-0 bottom-8'>
        <div className='flex flex-col mb-2 lg:gap-5 lg:items-center lg:flex-row'>
            <p className='font-montserrat text-h4 font-medium'>{rating.author} - São Paulo</p>
            <Rating name="read-only" value={rating.evaluation_grade} readOnly style={{ color: '#BC8383' }} size='large' />
        </div>
            <div className='w-[90%]'>
                <p className='font-montserrat font-light font-h6'>{rating.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Comment