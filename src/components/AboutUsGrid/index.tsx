import Grid01 from '../../assets/grid1.png';
import Grid02 from '../../assets/grid2.png';
import Grid03 from '../../assets/grid3.png';
import Grid04 from '../../assets/grid4.png';

function AboutUsGrid() {
  return (
    <div className='bg-bege-100 lg:pb-14 hidden lg:block'>
      <div className="container mx-auto flex flex-row gap-8 justify-center">
        <img className='hover:scale-105 transition-transform' src={Grid01} alt="" />
        <img className='hover:scale-105 transition-transform' src={Grid02} alt="" />
        <img className='hover:scale-105 transition-transform' src={Grid03} alt="" />
        <img className='hover:scale-105 transition-transform' src={Grid04} alt="" />
      </div>
    </div>
  );
}

export default AboutUsGrid