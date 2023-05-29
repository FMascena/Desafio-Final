import { Materials } from '../../@types/products'

interface MaterialPillProps {
    material: Materials
}

function MaterialPill({material}: MaterialPillProps) {
  return (
    <div>
        <p className='px-4 py-3 rounded-[33px] text-center bg-rosa-400 text-rosa-100 font-medium text-p3'>{material.description}</p>
    </div>
  )
}

export default MaterialPill