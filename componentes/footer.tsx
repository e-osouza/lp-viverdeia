import Image from 'next/image';

export default function Footer() {

    return (
        <footer className="footer bg-[#071010]">
            <div className="mx-auto max-w-[var(--largura)] px-5 py-10">

            <div className='grid grid-cols-1 gap-5 md:grid-cols-3 items-center'>
                <div className='flex flex-col items-center md:items-start'>
                    <Image className='mx-auto md:mx-0' width={120} height={120} src={"/logo-viverdeia.svg"} alt={"Viver de IA"} />
                    <span className="border-1 border-[var(--azul-neon)] text-white text-[10px] rounded-full px-4 py-1 bg-[#002C2F] mt-2 inline-block">Amazônia</span>
                </div>
                <div className='text-white text-center text-sm'>CNPJ: 10.279.661/0001-51 © 2025 Digital Comunicação. Todos os direitos reservados.</div>
                <div className='flex items-center justify-center md:justify-end'>
                    <Image src={"/instagram.svg"} width={30} height={30} alt='WhatsApp'/>
                    <Image src={"/whatsapp.svg"} width={30} height={30} alt='WhatsApp'/>
                </div>
            </div>

            </div>
        </footer>
    );

}