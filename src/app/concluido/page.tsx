import { ArrowRight } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="concluido h-screen overflow-hidden">
      <div className="bg-black/60 h-screen">
        <div className="flex flex-col justify-center h-screen relative bottom-20">
          <div className="max-w-[1000px] mx-auto px-5">
            <div className="text-white text-center mb-15">
              <h2 className="text-[var(--azul-neon)] uppercase font-bold text-4xl mb-2">Cadastro realizado com sucesso.</h2>
              <h3 className="font-bold">Você entrou para a lista de interesse do Viver de IA Experience Amazônia.</h3>
            </div>

            <div className="border-1 border-[var(--azul-neon)] pt-20 pl-10 pr-10 pb-10 rounded-xl backdrop-blur-lg relative">
              <div className="text-center text-white mb-5 absolute top-[-25px] left-[50%] translate-x-[-50%] z-10">
                <div className="px-5 py-3 text-white mx-auto inline-block mb-3 bg-[linear-gradient(90deg,_rgba(39,103,112,1)_0%,_rgba(0,255,255,1)_100%)] rounded-full uppercase font-bold">Próximo passo</div>
                <p className="text-sm">(obrigatório para receber avisos):</p>
              </div>
              <p className="text-white text-center text-lg"><span className="font-bold text-[var(--azul-neon)]">No Grupo VIP do WhatsApp</span>, você receberá a abertura de vendas em primeira mão, condições exclusivas, conteúdos interativos e avisos oficiais.</p>
              <a href="https://chat.whatsapp.com/ITBX0SE1BNz0U1wZGxenf2?mode=ems_copy_t" target="_blank" className="bg-[var(--azul-neon)] rounded-full uppercase font-bold px-5 py-3 flex gap-2 justify-center mt-8 w-fit mx-auto">Entrar no grupo vip agora <ArrowRight/></a>
            </div>
          </div>
        </div>

        <footer className="footer w-[100%] max-w-[1000px] mx-auto px-5 absolute bottom-0 left-[50%] translate-x-[-50%] mx-auto px-5 py-10">
          <div className='flex justify-between gap-5 items-center'>
            <div className='block w-fit text-center'>
              <Image className='mx-auto md:mx-0' width={120} height={120} src={"/logo-viverdeia.svg"} alt={"Viver de IA"} />
              <span className="border-1 border-[var(--azul-neon)] text-white text-[10px] rounded-full px-4 py-1 bg-[#002C2F] mt-2 inline-block">Amazônia</span>
            </div>
            <div className="flex items-center gap-2 border-1 border-[var(--azul-neon)] p-2 rounded-lg">
              <div className="block border-r-1 border-[var(--azul-neon)] pr-2 w-[96px] text-center">
                <div className="text-white font-bold text-2xl">18 e 19</div>
                <div className="text-[var(--azul-neon)] uppercase text-[12px]">de outubro</div>
              </div>
              <div className="block w-[120px]">
                <h4 className="text-[var(--azul-neon)] font-bold">Quality Hotel</h4>
                <h5 className="text-white text-[12px] leading-[1.2]">Av. Mário Ypiranga 1090 - Adrianópolis</h5>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}