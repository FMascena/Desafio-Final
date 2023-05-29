import React from 'react';
import Quote1 from '../../assets/Quote1.svg'
import Quote2 from '../../assets/Quote2.svg'

function Avaliations(){
  return (
    <div className='bg-bege-100 m-auto py-16'>
        <p className="text-h1 font-semibold text-center text-rosa-200 py-2">O que nossos clientes falam sobre nós?</p>
        <div className='w-10/12 m-auto gap-14 flex flex-col md:flex-row py-4'>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>Bolos e sobremesas deliciosas, chegou bem rapidinho. Ótimo serviço, parabéns pelo trabalho!</p>
                <div className='flex justify-between'>
                    <p className='name text-[22px] text-[#B57A73] mt-10'>
                        Márcia
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>Parabéns pela dedicação! Dá para sentir o cuidado no preparo e a qualidade é sensacional. Vou pedir mais vezes!</p>
                <div className='flex justify-between'>
                    <p className='name text-[22px] text-[#B57A73] mt-10'>
                        Isabeli
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>Chegou antes do prazo, está tudo perfeito! Gostei das opções veganas e orgânicas, muito saborosas!</p>
                <div className='flex justify-between'>
                    <p className='text-[22px] text-[#B57A73] mt-10'>
                        Maria Eduarda
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Avaliations;