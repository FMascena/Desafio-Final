import handNiddle from "../../assets/grid3.png";
import meetCleusa from "../../assets/meetcleusaicon.svg";

function AboutUsProcess() {
  return (
    <div className="bg-bege-100 lg:pt-14 pb-40">
      <div className="w-10/12 m-auto">
        <h1 className="text-center text-h1 text-rosa-200 font-semibold">
          Nosso Processo
        </h1>
        <div className="container mx-auto mt-14 flex gap-10">
          <img src={handNiddle} alt="" className="hidden lg:inline w-4/12" />
          <div className="px-8 max-w-6xl bg-[#FFFFFF] rounded-[30px] flex flex-col items-center justify-center gap-9 pb-10 md:mx-0 md:pb-0 relative md:w-8/12">
            <div className='flex'>
            <p className="leading-9 text-h4 p-4">
            Bem-vindo à nossa confeitaria, onde a excelência é o ingrediente principal. Utilizamos 
            apenas ingredientes de alta qualidade, selecionados com cuidado, para criar doces deliciosos
            e irresistíveis. Combinamos habilidade artesanal e amor pela culinária para oferecer aos 
            nossos clientes uma experiência única, repleta de sabores elevados e momentos doces inesquecíveis.
            Deixe-nos surpreendê-lo com nossa doçura feita com paixão e dedicação.
            </p>
            </div>
            <img
              src={meetCleusa}
              alt=""
              className="h-36 w-[85px] absolute -right-8 -bottom-20 hidden lg:inline mr-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsProcess;
