import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Programacao() {

    return(
        <div className="bg-[var(--vdi-bg)] overflow-hidden pb-10">

            <div className="max-w-[var(--largura)] mx-auto px-5">

                <div className="py-5">
                    <Link href="/" className="text-white flex items-center gap-2 border-2 border-[var(--azul-neon)] px-5 py-2 w-fit rounded-full"><ArrowLeft className="text-[var(--azul-neon)]" />Voltar</Link>
                </div>

                <h3 className="max-w-[550px] mx-auto text-[var(--azul-neon)] text-center font-bold text-3xl mb-10">Dois dias completo de aprendizado intensivo com conteúdo 100% prático</h3>
                <div className="px-8 py-1 text-white text-lg font-bold mx-auto mb-3 table bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full text-center">
                    Dia 18/10
                </div>
                <h3 className="text-white text-center mb-8 font-bold">Programação Manhã (09h00 – 12h00)</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">08h00 – 09h00</span>
                        <p className="text-white font-bold text-sm">Coffee Break de recepção (1h)</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">09h00 – 09h30</span>
                        <p className="text-white font-bold text-sm mb-2">1. Pensamento estratégico com IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">09h30 – 09h50</span>
                        <p className="text-white font-bold text-sm mb-2">2. Framework de IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">09h50 – 10h40</span>
                        <p className="text-white font-bold text-sm mb-2">3. Jornada de aquisição com IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">10h40 – 11h00</span>
                        <p className="text-white font-bold text-sm mb-2">Q&A com fundadores</p>
                        <div className="block">
                            <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                            <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                        </div>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">11h00 – 11h50</span>
                        <p className="text-white font-bold text-sm mb-2">4. Agente de atendimento e vendas – Nina IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                    </div>
                </div>
                <div className="bg-[#2767702B] mt-5 px-6 py-10 rounded-lg text-center">
                    <Image className="mx-auto" src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                    <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">12h00 – 14h00</span>
                    <p className="text-white font-bold text-sm">Almoço</p>
                </div>

                <h3 className="text-white text-center mt-10 mb-8 font-bold">Programação Tarde (14h00 – 18h30)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">14h00 – 14h50</span>
                        <p className="text-white font-bold text-sm">5. Princípios básicos de IA para negócios</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">14h50 – 15h40</span>
                        <p className="text-white font-bold text-sm mb-2">6. Treinamento de time e CRM automatizado com IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">15h40 – 16h00</span>
                        <p className="text-white font-bold text-sm mb-2">Q&A com fundadores</p>
                        <div className="block">
                            <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                            <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                        </div>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">16h00 – 16h30</span>
                        <p className="text-white font-bold text-sm">Break</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">16h30 – 16h55</span>
                        <p className="text-white font-bold text-sm mb-2">7. Prospecção ativa com IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">16h55 – 17h20</span>
                        <p className="text-white font-bold text-sm mb-2">Prompts para desenvolver a IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">17h20 – 18h10</span>
                        <p className="text-white font-bold text-sm mb-2">9. Construção de SaaS com IA – Plataforma Viver de IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">18h00 – 18h30</span>
                        <p className="text-white font-bold text-sm">Momento Pitch</p>
                    </div>
                </div>


                <div className="px-8 py-1 text-white text-lg font-bold mx-auto mt-20 mb-3 table bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full text-center">
                    Dia 19/10
                </div>
                <h3 className="text-white text-center mb-8 font-bold">Programação Manhã (09h00 – 12h00)</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">08h00 – 09h00</span>
                        <p className="text-white font-bold text-sm">Recepção</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">09h00 – 09h52</span>
                        <p className="text-white font-bold text-sm mb-2">10. Análise de dados com IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">09h52 – 10h22</span>
                        <p className="text-white font-bold text-sm">11. IA e inovação em modelos de negócios</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">10h22 – 11h14</span>
                        <p className="text-white font-bold text-sm">12. Gestão financeira inteligente com IA</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">11h14 – 11h44</span>
                        <p className="text-white font-bold text-sm mb-2">Q&A com fundadores</p>
                        <div className="block">
                            <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                            <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                        </div>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">11h30 – 12h00</span>
                        <p className="text-white font-bold text-sm mb-2">Repitch</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                    </div>
                </div>
                <div className="bg-[#2767702B] mt-5 px-6 py-10 rounded-lg text-center">
                    <Image className="mx-auto" src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                    <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">12h00 – 14h00</span>
                    <p className="text-white font-bold text-sm">Almoço</p>
                </div>

                <h3 className="text-white text-center mt-10 mb-8 font-bold">Programação Tarde (14h00 – 18h00)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">14h00 – 14h52</span>
                        <p className="text-white font-bold text-sm mb-2">13. Recrutamento e seleção com IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">14h52 – 15h44</span>
                        <p className="text-white font-bold text-sm mb-2">14. Board estratégico com IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">15h44 – 16h14</span>
                        <p className="text-white font-bold text-sm mb-2">Q&A com fundadores</p>
                        <div className="block">
                            <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                            <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                        </div>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">16h00 – 16h30</span>
                        <p className="text-white font-bold text-sm">Break</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">16h30 – 17h22</span>
                        <p className="text-white font-bold text-sm mb-2">15. Estrutura de time com IA</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">17h22 – 17h42</span>
                        <p className="text-white font-bold text-sm mb-2">16. Visão de futuro</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
                    </div>
                    <div className="bg-[#2767702B] px-6 py-10 rounded-lg">
                        <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
                        <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">17h42 – 18h00</span>
                        <p className="text-white font-bold text-sm mb-2">Encerramento & Repitch</p>
                        <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
                    </div>
                </div>

            </div>

        </div>
    )
}