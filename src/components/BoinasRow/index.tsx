import { useRef, useState } from "react"
import RowCard from "../RowCard"
import LeftIcon from '../../assets/LeftIcon.svg'
import RightIcon from '../../assets/RightIcon.svg'
import { Product } from "../../@types/products"
import BoinasTitle from "../BoinasTitle"

interface RowProps {
  title: string,
  product: Product[]
}

function Row({ title, product }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }


  return (
    <div className={`w-full flex flex-col pb-10 ${title === 'Destaques' && 'bg-[#FFFFFF]'}`}>
      <BoinasTitle title={title} />
      <div className='flex w-screen md:container md:mx-auto gap-4 items-center justify-center'>
        <div>
          <button onClick={() => handleClick('left')} className={`hidden h-20 w-20 md:inline z-40 m-auto cursor-pointer hover:scale-125 transition
                    ${!isMoved && 'hidden'}`}><img src={LeftIcon} alt=""/></button>
        </div>
        <div className='flex justify-between overflow-x-auto scrollbar-hide snap-mandatory snap-x mx-10 md:mx-0 transition-all' ref={rowRef}>
          <div className='flex gap-10 md:mx-0 mx-auto ml-2'>
            {product.map((product) => (
              <RowCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div>
          <button onClick={() => handleClick('right')} className={`hidden h-20 w-20 md:inline z-40 m-auto cursor-pointer hover:scale-125 transition`}><img src={RightIcon} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Row