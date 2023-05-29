import BannerLeaf from '../BannerLeaf'

interface BannerCatalogoProps {
  title: string,
  frase: any
}

function BannerCatalogo({title, frase}: BannerCatalogoProps) {
  return (
    <div className='w-full bg-rosa-200 h-[200px] md:h-[488px] p-0 flex content-center md:flex relative'>
      <div className='absolute flex md:m-0 auto h-[200px] md:h-[488px] -left-[180px] md:-left-[100px]'>
        <BannerLeaf />
      </div>
      <div className='text-[#FFFF] font-montserrat m-auto flex flex-col relative'>
        <h1 className='text-center font-bold py-4 text-[55px] md:text-[80px]'>{title}</h1>
        <p className='hidden text-h3 text-center whitespace-nowrap md:flex relative'>{frase}</p>
      </div>
    </div>
  )
}

export default BannerCatalogo