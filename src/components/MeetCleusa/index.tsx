import Cleusa from '../../assets/sodie-dona-cleusa.png'
import meetKellyIcon from '../../assets/meetcleusaicon.svg'

function MeetCleusa() {
    return (
        <div className='bg-bege-100 pt-20 lg:pb-40'>
            <div className='container mx-auto w-10/12'>
                <h1 className='text-center text-h1 text-rosa-200 font-semibold md:mb-12'>Como Tudo Começou</h1>
                <img src={Cleusa} alt="Imagem da Kelly" className='mx-auto my-4 w-8/12 md:w-3/12 md:hidden'/>
                <div className='flex flex-col gap-5 items-center md:justify-between md:flex-row md:items-stretch'>
                    <div className='px-8 md:w-9/12 max-w-6xl bg-[#FFFFFF] rounded-[30px] flex flex-col justify-center gap-9 md:mx-0 md:pb-0 relative'>
                        <h2 className='font-semibold italic leading-9 text-h4 mt-7'>Uma trajetória de sucesso!</h2>
                        <p className='leading-9 text-h4'>
                        Cleusa começou seu negócio em um espaço de 20m² na cidade de Salto, interior de São Paulo. 
                        De família pobre, foi boia-fria, cortadora de cana-de-açúcar e, depois, empregada doméstica. 
                        A grande oportunidade aconteceu quando era funcionária de uma empresa de alto-falantes.
                        A mulher de seu patrão fazia bolos para fora e, quando teve um problema de saúde, pediu 
                        para que ela a ajudasse, até que acabou por parar com a venda de bolos e deixou que Cleusa 
                        continuasse o negócio. A futura empreendedora passou a fazer os bolos e os levava a pé aos 
                        clientes. Com o passar dos anos, as receitas foram aprimoradas e, com a ajuda de sua mãe, 
                        conseguiu abrir pequeno comércio em Salto. Quatro anos depois, mudou o empreendimento para 
                        um espaço de 80m² - quatro vezes maior, e foi abrindo outras lojas, em cidades próximas como 
                        Sorocaba, Americana e Itu. O negócio não parou de crescer, hoje a Sweet Dreams é uma referência 
                        como confeitaria e Cleusa uma das empreendedoras de mais sucesso do país.
                        </p>
                        <img src={meetKellyIcon} alt="" className='w-[85px] absolute -right-6 -bottom-12 hidden lg:inline mr-12' />
                    </div>
                    <div>
                        <img src={Cleusa} alt="Imagem da Cleusa" className='hidden md:flex object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetCleusa