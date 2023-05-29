import Rating from '@mui/material/Rating'
import Comment from '../Comment'
import { Rating as Ratings } from '../../@types/products'
import { useLocation } from 'react-router-dom'


function CommentSection() {
  const location = useLocation()
  const ratings: Ratings[] = location.state.Ratings
  const overall_evaluation = location.state.overall_evaluation
  return (
    <>
      {ratings.length === 0 ? (
        <>
        </>
      ) : (
        <section className='bg-bege-100 py-20 flex justify-center'>
          <div className='container mx-2'>
            <h1 className='font-montserrat text-h3 text-rosa-200 font-bold'>Avaliações</h1>
            <div className='flex gap-8 items-center'>
              <p className='text-[40px] font-semibold text-preto-100 font-montserrat'>{overall_evaluation}.0</p>
              <Rating name="read-only" value={overall_evaluation} readOnly style={{ color: '#BC8383' }} size='small' />
              <p className='text-montserrat font-medium text-p3 text-preto-100'>{ratings.length} Avaliações</p>
            </div>
            {ratings.map((rating) => (
              <Comment key={rating.id} rating={rating} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default CommentSection