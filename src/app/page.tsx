"use client"

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react"
import Footer from "../../componentes/footer";
import Script from "next/script";
import { dlPush } from "../../componentes/dataLayer";

const faqData = [
  {
    id: 1,
    question: "1. Preciso ter conhecimento técnico em IA para participar?",
    answer:
      "Não. A Imersão é voltada para empresários, gestores e profissionais que querem aprender aplicações práticas de inteligência artificial nos negócios, sem necessidade de programação.",
  },
  {
    id: 2,
    question: "2. O evento é presencial ou online?",
    answer:
      "O evento é 100% presencial, em Manaus, nos dias 18 e 19 de outubro de 2025 no Quality Hotel.",
  },
  {
    id: 3,
    question: "3. O que está incluso no ingresso?",
    answer:
      "Dois dias completos de imersão presencial, Materiais digitais exclusivos, Certificado oficial de participação, Espaço dedicado para networking, Bônus: desconto exclusivo no ingresso do Amazon IA Summit (1 e 2 de dezembro, Vasco Vasques).",
  },
  {
    id: 4,
    question: "4. Quantas vagas estão disponíveis?",
    answer:
      "As vagas são limitadas, recomendamos garantir sua inscrição o quanto antes.",
  },
  {
    id: 5,
    question: "5. Quem são os palestrantes?",
    answer:
      "Rafael Milagre: Diretor de IA na Nalk, professor da ESPM, mentor no G4 AI Academy e fundador do Viver de IA. Yago Martins: Fundador e CEO da Nalk, ex-oficial do Exército, mentor no G4 Educação e vencedor do prêmio Founder do Ano — Growth Awards 2024.",
  },
  {
    id: 6,
    question: "6. Haverá certificado de participação?",
    answer:
      "Sim. Todos os participantes receberão um certificado oficial de conclusão da imersão Viver de IA Experience Amazônia.",
  },
  {
    id: 7,
    question: "7. Como funciona o pagamento?",
    answer:
      "O ingresso pode ser pago à vista ou em até 12x no cartão de crédito.",
  },
  {
    id: 8,
    question: "8. Para quem a Imersão é indicada?",
    answer:
      "Empresários, gestores, profissionais de marketing e vendas e empreendedores digitais que querem aplicar IA de forma prática para ganhar eficiência, captar mais clientes e melhorar resultados.",
  },
  {
    id: 9,
    question: "9. O que vou aprender na prática?",
    answer:
      "Aplicações de IA para marketing, vendas e operações; cases de sucesso; melhores práticas dos especialistas; e conteúdos conectados ao contexto regional para transformar processos e resultados do seu negócio.",
  },
  {
    id: 10,
    question: "10. O conteúdo é contextualizado para a realidade da Amazônia?",
    answer:
      "Sim. O evento foi pensado para o Norte, com foco em oportunidades locais, cases regionais e uma narrativa de transformação digital alinhada ao ecossistema amazônico.",
  },
]

// Supondo que você tenha estas funções no mesmo arquivo ou importadas:
function formatPhoneBR(input: string) {
  const digits = input.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) return "";

  if (digits.length < 3) {
    return `(${digits}`;
  }
  if (digits.length < 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length < 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function getPhoneForSubmit(input: string) {
  const digits = input.replace(/\D/g, "").slice(0, 11);
  return digits ? `+55${digits}` : "";
}


export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    whatsapp: "",
    perfil: "",
    concordaPrivacidade: false,
  })

  // handleSubmit com validação + dataLayer
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // garante que só dispara se tudo estiver preenchido
    const isValid =
      formData.nomeCompleto.trim() &&
      formData.email.trim() &&
      formData.whatsapp.trim() &&
      formData.perfil &&
      formData.concordaPrivacidade;

    if (isValid) {
      dlPush({
        event: "form_ready_to_submit",
        form_name: "confirmacao_imersao_viver_de_ia",
        nome: formData.nomeCompleto,
        email: formData.email,
        whatsapp: formData.whatsapp,
        perfil: formData.perfil,
      });
      if (typeof window !== "undefined") {
        console.info("✅ form_ready_to_submit disparado");
      }
    }

    const payload = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "Evento IA Amazônia",
        name: formData.nomeCompleto,
        email: formData.email,
        mobile_phone: formData.whatsapp,
        cf_profissao: formData.perfil,
      },
    };

    try {
      const response = await fetch(
        "https://api.rd.services/platform/conversions?api_key=srBBHZMBEsCrQCnbhovlXjDKnpKSfcTcwfdQ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
    
      if (response.ok) {
        dlPush({
          event: "form_submit_success",
          form_name: "confirmacao_imersao_viver_de_ia",
        });
    
        // abre em nova aba
        window.open(
          "https://www.sympla.com.br/evento/imersao-viver-de-ia-experience-amazonia/3114945",
          "_blank"
        );
    
        // alert(formData.perfil) // opcional
      } else {
        dlPush({
          event: "form_submit_error",
          form_name: "confirmacao_imersao_viver_de_ia",
          status: response.status,
        });
        console.error("Erro ao enviar lead:", await response.text());
      }
    } catch (error) {
      dlPush({
        event: "form_submit_exception",
        form_name: "confirmacao_imersao_viver_de_ia",
        error_type: "exception",
      });
      console.error("Erro na integração:", error);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const [openItem, setOpenItem] = useState<number | null>(null)
  const toggleItem = (id: number) => {
    const willOpen = openItem !== id;
    setOpenItem(willOpen ? id : null);

    // 👇 Evento de interação no FAQ (opcional, mas útil)
    dlPush({
      event: "faq_toggle",
      faq_id: id,
      is_open: willOpen,
    });
  }

  return (
    <div className="bg-[var(--vdi-bg)] overflow-hidden">

      {/*section hero*/}
      <div className="section-hero pt-20 md:pt-10">
        <div className="max-w-[var(--largura)] mx-auto px-5 relative">
          <div className="img-hero">
            <Image className="mx-auto !w-[550px]" width={300} height={200} src={"/palestrantes.png"} alt={"Viver de IA"}/>
          </div>
          <div className="flex items-center gap-2 absolute top-[-55px] md:top-0 right-5 md:right-10 border-1 border-[var(--azul-neon)] p-2 rounded-lg">
            <div className="w-[96px] text-center">
              <div className="text-white font-bold text-2xl">18 e 19</div>
              <div className="text-[var(--azul-neon)] uppercase text-[12px]">de outubro</div>
            </div>
            <div className="block w-[120px] block border-l-1 border-[var(--azul-neon)] pl-2">
              <h4 className="text-[var(--azul-neon)] font-bold">Quality Hotel</h4>
              <h5 className="text-white text-[12px] leading-[1.2]">Av. Mário Ypiranga 1090 - Adrianópolis</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="section-hero-p2 mt-[-100px] md:mt-[-150px] relative z-10">
        <div className="max-w-[var(--largura)] mx-auto px-5 flex flex-wrap md:flex-nowrap justify-center items-start md:items-center gap-5 relative">
          <div className="flex flex-col items-end text-right text-white w-[45%] md:w-[25%] order-[2]">
            <h4 className="font-bold text-[var(--azul-neon)]">Rafael Milagre</h4>
            <h5>Founder Viver de IA</h5>
          </div>
          <div className="block text-center w-[100&] md:w-[50%] order-[1] md:order-[2]">
            <Image className="mx-auto w-[80%]" width={100} height={100} src={"/logo-viverdeia.svg"} alt={"Viver de IA"} />
            <span className="border-1 border-[var(--azul-neon)] text-white rounded-full px-4 py-1 bg-[#002C2F] mt-2 inline-block">Amazônia</span>
          </div>
          <div className="block text-white w-[45%] md:w-[25%] order-[3]">
            <h4 className="font-bold text-[var(--azul-neon)]">Yago Martins</h4>
            <h5>CEO & Founder Viver de IA</h5>
          </div>
          <Image className="absolute top-0 right-0" src={"/star-w.svg"} alt="star" width={30} height={30}/>
        </div>

        <div className="max-w-[var(--largura)] mx-auto px-5 text-center mt-15 relative">
          <h3 className="text-white font-bold text-lg">Imersão de</h3>
          <h3 className="text-[var(--azul-neon)] text-center text-4xl md:text-8xl font-[600]">Inteligência Artificial</h3>
          <h3 className="text-white mt-3 font-bold text-2xl">para <span className="text-[var(--azul-neon)]">líderes e empresários</span></h3>
          <Image className="absolute bottom-[50%] left-0" src={"/star-b.svg"} alt="star" width={30} height={30}/>
          <a href="#formulario" className="bg-[var(--azul-neon)] rounded-full uppercase font-bold px-5 py-3 flex gap-2 justify-center mt-8 w-fit mx-auto text-black">Compre Agora <ArrowRight/></a>
        </div>
      </div>

      {/*section 2*/}
      <div className="max-w-[1000px] mx-auto px-5 mt-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border-2 border-[var(--azul-neon)] px-10 md:px-20 py-8 rounded-4xl md:rounded-full bg-[#27677059]">
          <div className="block border-b-1 md:border-b-0 border-r-0 md:border-r-1 border-[var(--azul-neon)] pb-5 md:pb-0 pr-0 md:pr-2">
            <h3 className="text-[var(--azul-neon)] font-bold">Estratégias exclusivas</h3>
            <h4 className="text-white">que vão alavancar os negócios do Norte do Brasil.</h4>
          </div>
          <div className="block border-b-1 md:border-b-0 border-r-0 md:border-r-1 border-[var(--azul-neon)] pb-5 md:pb-0 pr-0 md:pr-2">
            <h3 className="text-[var(--azul-neon)] font-bold">Uma experiência única</h3>
            <h4 className="text-white">ao lado dos criadores do Viver de IA.</h4>
          </div>
          <div className="block">
            <h3 className="text-[var(--azul-neon)] font-bold">Networking direto</h3>
            <h4 className="text-white">com empresários que estão liderando a inovação na região.</h4>
          </div>
        </div>
      </div>

      {/*section 3 videos*/}
      <div className="max-w-[var(--largura)] mx-auto px-5 mt-15 ">
        <h3 className="max-w-[900px] mx-auto text-[var(--azul-neon)] text-center mb-2 font-bold text-2xl">
          Empresários e líderes, em dois dias você terá acesso a frameworks práticos para destravar o crescimento do seu negócio.
        </h3>
        <div className="flex justify-center gap-4 mt-4">
          <div className="px-5 py-2 text-white text-sm leading-4 bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full text-center">
            Escalar Vendas
          </div>
          <div className="px-5 py-2 text-white text-sm leading-4 bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full text-center">
            Reduzir custos
          </div>
          <div className="px-5 py-2 text-white text-sm leading-4 bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full text-center">
            Aplicar IA com clareza
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="w-full md:w-[64%] overflow-hidden col-span-4 rounded-lg">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1118237056?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="VT_TEASER AMAZON IA - VEICULACAO"
              ></iframe>
              <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>

        <div className="px-5 py-3 text-white text-sm mx-auto table bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full text-center">
          A imersão Viver de IA Experience Amazônia traz aplicações estratégicas para mudar o cenário da sua empresa.
        </div>
      </div>


      {/*section 4 palestrantes*/}
      <div className="max-w-[var(--largura)] mx-auto px-5 mt-20 relative">
      <h3 className="max-w-[900px] mx-auto text-[var(--azul-neon)] text-center mb-5 font-bold text-2xl">Conheça os mentores da sua jornada no Viver de IA Experience Amazônia</h3>
        <div className="bg-[#27677059] rounded-xl p-5 md:p-10 grid grid-cols-3 gap-6 z-10 relative">
          <div className="block col-span-3 md:col-span-2 order-[2] md:order-[1]">
            <h3 className="text-[var(--azul-neon)] text-2xl font-bold">Rafael Milagre</h3>
            <div className="px-5 py-3 text-white mx-auto inline-block my-4 bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full">Uma das maiores referências em IA para negócios no Brasil</div>
            <ul className="text-white list-disc ml-5">
              <li>Fundador do VIVER DE IA</li>
              <li>Diretor de IA na Nalk</li>
              <li>Mentor no programa G4 AI Academy do G4 Educação</li>
              <li>Professor de Inteligência Artificial na ESPM</li>
            </ul>
            <p className="text-white my-5">Rafael possui formação em soluções no-code para agentes inteligentes em marketing, vendas, RH e operações. Ele já ajudou empresas e alunos a conquistarem contratos de cinco dígitos com aplicações práticas de inteligência artificial.</p>
            <span className="border-1 border-white text-white rounded-full px-4 py-1 table">+5.000 alunos impactados</span>
            <span className="border-1 border-white text-white rounded-full px-4 py-1 mt-4 table">+200 empresários assessorados</span>
            <span className="border-1 border-white text-white rounded-full px-4 py-1 mt-4 table">+10 anos de experiência em inovação e tecnologia</span>

            <Image className="mt-5" src={"/logos.svg"} width={300} height={200} alt="logo"/>
          </div>

          <div className="block col-span-3 md:col-span-1 order-[1] md:order-[2]">
            <Image width={400} height={400} className="!w-[100%] rounded-[40px]" src={"/rafael-milagre.jpg"} alt={"Rafael Milagre"}/>
          </div>
          
          <Image className="absolute top-[20px] right-[-50px]" src={"/star-b.svg"} alt="star" width={40} height={40}/>
        </div>

        <div className="w-[100%] h-[200px] rounded-[100%] -translate-y-10 absolute left-0 blur-[150px] bg-[#00FFFF4F]"></div>

        <div className="bg-[#27677059] rounded-xl p-5 md:p-10 grid grid-cols-3 gap-6 mt-8 z-10 relative">
          <div className="block col-span-3 md:col-span-1">
            <Image width={400} height={400} className="!w-[100%] rounded-[40px]" src={"/yago-martins.jpg"} alt={"Rafael Milagre"}/>
          </div>
          
          <div className="block col-span-3 md:col-span-2">
            <h3 className="text-[var(--azul-neon)] text-2xl font-bold">Yago Martins</h3>
            <div className="px-5 py-3 text-white mx-auto inline-block my-4 bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full">CEO do Viver de IA que transforma dados em resultados</div>
            <ul className="text-white list-disc ml-5">
              <li>Fundador e CEO da Nalk</li>
              <li>Ex-oficial do Exército</li>
              <li>Mentor no G4 Educação</li>
              <li>Founder Premiado</li>
            </ul>
            <p className="text-white my-5">Yago é referência em growth, dados e vendas com IA. Como produtor de conteúdo, inspira milhares de profissionais a transformarem seus negócios com IA e hoje lidera a construção do maior ecossistema de educação e soluções práticas de IA para empresários e gestores do Brasil.</p>
            <span className="border-1 border-white text-white rounded-full px-4 py-1 table">+18,5 milhões em vendas geradas (2022)</span>
            <span className="border-1 border-white text-white rounded-full px-4 py-1 mt-4 table">+15 anos de experiência em vendas e liderança</span>
            <span className="border-1 border-white text-white rounded-full px-4 py-1 mt-4 table">Resultados comprovados em múltiplos setores</span>

            <Image className="mt-5" src={"/logos.svg"} width={300} height={200} alt="logo"/>
          </div>

          <Image className="absolute bottom-[20px] left-[-50px]" src={"/star-w-2.svg"} alt="star" width={40} height={40}/>
        </div>

        <a className="bg-[var(--azul-neon)] mx-auto rounded-full uppercase font-bold gap-2 w-fit px-5 py-3 flex mt-5 text-black" href="#formulario">Compre Agora <ArrowRight/></a>
      </div>

      {/*section 5*/}
      <div className="max-w-[var(--largura)] mx-auto px-5 mt-20">
        <h3 className="text-[var(--azul-neon)] text-center font-bold text-2xl mb-10">Esta imersão é para você</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="p-5 text-white text-center bg-[#27677059] rounded-lg">
            <Image className="mx-auto mb-3" src={"/chart.svg"} width={60} height={60} alt="Viver de IA"/>
            <h3 className="font-bold leading-[1.2] mb-3">Empresário:</h3>
            <h4 className="text-md leading-[1.2]">Escalar suas vendas, aumentar o faturamento e tornar o negócio mais competitivo.</h4>
          </div>
          <div className="p-5 text-white text-center bg-[#27677059] rounded-lg">
            <Image className="mx-auto mb-3" src={"/conections.svg"} width={60} height={60} alt="Viver de IA"/>
            <h3 className="font-bold leading-[1.2] mb-3">Empreendedor:</h3>
            <h4 className="text-md leading-[1.2]">Inovar, posicionar sua marca no futuro e sair na frente do mercado.</h4>
          </div>
          <div className="p-5 text-white text-center bg-[#27677059] rounded-lg">
            <Image className="mx-auto mb-3" src={"/messagens.svg"} width={60} height={60} alt="Viver de IA"/>
            <h3 className="font-bold leading-[1.2] mb-3">Gestor:</h3>
            <h4 className="text-md leading-[1.2]">Automatizar processos, reduzir custos operacionais e melhorar a performance da sua equipe.</h4>
          </div>
          <div className="p-5 text-white text-center bg-[#27677059] rounded-lg">
            <Image className="mx-auto mb-3" src={"/megafone.svg"} width={60} height={60} alt="Viver de IA"/>
            <h3 className="font-bold leading-[1.2] mb-3">Profissional de marketing, vendas ou operações:</h3>
            <h4 className="text-md leading-[1.2]">Ganhar tempo, melhorar resultados e trabalhar com mais eficiência.</h4>
          </div>
        </div>
      </div>

      {/*section 6*/}
      <div className="section-waves py-20 mt-20 relative">
        <div className="w-[300px] h-[10px] absolute top-0 bg-[var(--azul-neon)] left-[50%] -translate-x-[50%]"></div>
          <div className="max-w-[900px] mx-auto px-5">
          <h3 className="text-[var(--azul-neon)] text-center font-bold text-2xl mb-15">Você corre o risco de ficar para trás se não entender o poder da IA.</h3>
          <div className="flex justify-between mb-3">
            <h4 className="text-white font-bold text-lg">Dias 18 e 19 de Outubro</h4>
            <h4 className="text-[var(--azul-neon)] font-bold text-lg">Quality Hotel</h4>
          </div>
          <div className="border-1 border-white px-5 py-15 rounded-xl text-white text-2xl text-center backdrop-blur-md">Você terá acesso aos bastidores do que realmente funciona, <span className="font-bold text-[var(--azul-neon)]">sem teoria, sem enrolação, só resultado prático.</span></div>
          <a className="bg-[var(--azul-neon)] rounded-full uppercase font-bold gap-2 w-fit px-5 py-3 flex mt-5 mx-auto text-black" href="#formulario">Compre Agora <ArrowRight/></a>
        </div>
      </div>

      {/*section 7 programacao*/}
      <div className="max-w-[var(--largura)] mx-auto px-5 relative mt-20 hidden">
        <h3 className="max-w-[500px] mx-auto text-[var(--azul-neon)] text-center font-bold text-2xl mb-10">Dois dias completo de aprendizado intensivo com conteúdo 100% prático</h3>
        <div className="px-8 py-1 text-white text-sm mx-auto mb-8 table bg-[linear-gradient(90deg,_rgba(39,103,112,0.38)_0%,_rgba(0,255,255,0.38)_100%)] rounded-full text-center">
          Dia 18/10
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          <div className="bg-[#2767702B] px-5 py-10 rounded-lg">
            <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
            <span className="bg-[var(--azul-neon)] rounded-full text-sm px-3 py-1 mt-5 mb-4 inline-block">08h00 – 09h00</span>
            <p className="text-white font-bold text-sm">Coffee Break de recepção (1h)</p>
          </div>
          <div className="bg-[#2767702B] px-5 py-10 rounded-lg">
            <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
            <span className="bg-[var(--azul-neon)] rounded-full text-sm px-3 py-1 mt-5 mb-4 inline-block">09h00 – 09h30</span>
            <p className="text-white font-bold text-sm mb-2">1. Pensamento estratégico com IA</p>
            <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
          </div>
          <div className="bg-[#2767702B] px-5 py-10 rounded-lg">
            <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
            <span className="bg-[var(--azul-neon)] rounded-full text-sm px-3 py-1 mt-5 mb-4 inline-block">09h30 – 09h50</span>
            <p className="text-white font-bold text-sm mb-2">2. Framework de IA</p>
            <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
          </div>
          <div className="bg-[#2767702B] px-5 py-10 rounded-lg">
            <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
            <span className="bg-[var(--azul-neon)] rounded-full text-sm px-3 py-1 mt-5 mb-4 inline-block">09h50 – 10h40</span>
            <p className="text-white font-bold text-sm mb-2">3. Jornada de aquisição com IA</p>
            <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
          </div>
          <div className="bg-[#2767702B] px-5 py-10 rounded-lg">
            <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
            <span className="bg-[var(--azul-neon)] rounded-full text-sm px-3 py-1 mt-5 mb-4 inline-block">10h40 – 11h00</span>
            <p className="text-white font-bold text-sm mb-2">Q&A com fundadores</p>
            <div className="block">
              <p className="font-bold text-[var(--azul-neon)] uppercase">Yago Martins</p>
              <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
            </div>
          </div>
          <div className="bg-[#2767702B] px-5 py-10 rounded-lg">
            <Image src={"/asteristico-azul.svg"} width={30} height={30} alt="Viver de IA"/>
            <span className="bg-[var(--azul-neon)] rounded-full text-sm px-4 py-1 mt-5 mb-4 inline-block">11h00 – 11h50</span>
            <p className="text-white font-bold text-sm mb-2">4. Agente de atendimento e vendas – Nina IA</p>
            <p className="font-bold text-[var(--azul-neon)] uppercase">Rafael Milagre</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 flex-wrap md:flex-nowrap mt-5">
          <a className="bg-[var(--azul-neon)] rounded-full uppercase font-bold gap-2 w-fit px-8 py-3 flex text-black" href="#formulario">Compre Agora <ArrowRight/></a>
          <a className=" border-2 border-[var(--azul-neon)] rounded-full uppercase font-bold gap-2 w-fit px-8 py-3 flex text-white" href="/programacao">Ver Todas<ArrowRight/></a>
        </div>
      </div>

      {/*section 8 preço*/}
      <div className="max-w-[var(--largura)] mx-auto px-5 relative mt-20">
        <h3 className="max-w-[600px] mx-auto text-[var(--azul-neon)] text-center font-bold text-2xl mb-5">Veja tudo o que está incluso na sua inscrição para a imersão Viver de IA Experience Amazônia</h3>
        <div className="border-1 border-white rounded-2xl p-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="pb-5">
            <div className="w-fit text-center relative">
              <Image className="absolute right-[-25px]" src={"/star-w.svg"} width={15} height={15} alt="star"/>
              <h3 className="text-white uppercase text-2xl tracking-[3]">Viver <span className="text-[var(--azul-neon)]">de IA</span></h3>
              <span className="border-1 border-[var(--azul-neon)] text-white text-[10px] rounded-full px-4 py-1 bg-[#002C2F] mb-5 inline-block">Amazônia</span>
            </div>
            <ul className="text-white">
              <li className="flex items-center gap-2 mb-2"><Image src={"/check.svg"} width={18} height={18} alt="IA"/> Dois dias completos de imersão presencial</li>
              <li className="flex items-center gap-2 mb-2 hidden"><Image src={"/check.svg"} width={18} height={18} alt="IA"/> Materiais digitais exclusivos para aplicar imediatamente</li>
              <li className="flex items-center gap-2 mb-2"><Image src={"/check.svg"} width={18} height={18} alt="IA"/> Certificado oficial de participação</li>
              <li className="flex items-center gap-2 mb-2"><Image src={"/check.svg"} width={18} height={18} alt="IA"/> Espaço dedicado para networking com empresários e gestores</li>
            </ul>
            <div className="bg-[#001B1B] mt-5 rounded-lg text-white p-5 flex items-start gap-2 hidden"><Image src={"/star-b.svg"} width={20} height={20} alt="IA"/> Bônus especial: desconto exclusivo na compra do ingresso para o Amazon IA Summit, nos dias 1 e 2 de dezembro, no Centro de Convenções Vasco Vasques</div>
            <div className="border-t-1 border-white/30 pt-5 mt-5">
              <h3 className="text-[var(--azul-neon)] font-bold text-xl">12x de <span className="text-4xl">R$134,14</span><span className="font-normal text-white"> ou R$1.297,00 à vista</span></h3>
            </div>
            <a className="bg-[var(--azul-neon)] rounded-full uppercase font-bold gap-2 w-fit px-5 py-3 flex mt-5 text-black" href="#formulario">Compre Agora <ArrowRight/></a>
          </div>
          <div className="flex justify-center">
            <Image className="!w-[100%] !h-[auto]" src={"/passaporte.png"} width={500} height={500} alt="passaportes"/>
          </div>
        </div>
        <div className="w-[120%] h-[200px] rounded-[100%] left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] absolute bg-[#00FFFF69] blur-[100px] opacity-[0.5]"></div>
      </div>

      {/*section formulario 9*/}
      <div id="formulario" className="max-w-[1100px] px-5 mx-auto pt-20">
        <h3 className="max-w-[550px] text-[var(--azul-neon)] font-bold text-2xl mb-10">Confirme sua presença no evento que vai acelerar o crescimento do seu negócio com inteligência artificial</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form flex items-center">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* infos */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Nome completo:"
                  value={formData.nomeCompleto}
                  onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                  className="bg-[#FFFFFF1C] w-full border-white border-1 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="E-mail:"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-[#FFFFFF1C] border-white border-1 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="tel"
                  placeholder="Contato (WhatsApp):"
                  value={formData.whatsapp}
                  onChange={(e) => {
                    const formatted = formatPhoneBR(e.target.value);
                    handleInputChange("whatsapp", formatted);
                  }}
                  onPaste={(e) => {
                    const pasted = (e.clipboardData || (window as any).clipboardData).getData("text");
                    const formatted = formatPhoneBR(pasted);
                    e.preventDefault();
                    handleInputChange("whatsapp", formatted);
                  }}
                  inputMode="numeric"
                  className="w-full bg-[#FFFFFF1C] border-white border-1 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
              </div>

              <div className="mb-2 mt-3 border-1 border-[var(--azul-neon)] p-5 rounded-lg bg-[#FFFFFF1C]">
                <label className="text-white font-medium text-base block mb-2">Você é:</label>
                <div className="flex flex-col flex-wrap gap-3">
                  <div className="flex items-center space-x-1">
                    <input
                      type="radio"
                      id="empresario"
                      name="perfil"
                      value="empresario"
                      checked={formData.perfil === "empresario"}
                      onChange={(e) => handleInputChange("perfil", e.target.value)}
                      className="w-4 h-4 text-cyan-400 bg-transparent border-2 border-cyan-400 focus:ring-cyan-400 focus:ring-2"
                    />
                    <label htmlFor="empresario" className="text-white text-sm leading-[1] cursor-pointer">
                      Empresário
                    </label>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      type="radio"
                      id="diretor"
                      name="perfil"
                      value="diretor"
                      checked={formData.perfil === "diretor"}
                      onChange={(e) => handleInputChange("perfil", e.target.value)}
                      className="w-4 h-4 text-cyan-400 bg-transparent border-2 border-cyan-400 focus:ring-cyan-400 focus:ring-2"
                    />
                    <label htmlFor="diretor" className="text-white text-sm leading-[1] cursor-pointer">
                      Diretor ou Gestor
                    </label>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      type="radio"
                      id="profissional"
                      name="perfil"
                      value="profissional"
                      checked={formData.perfil === "profissional"}
                      onChange={(e) => handleInputChange("perfil", e.target.value)}
                      className="w-4 h-4 text-cyan-400 bg-transparent border-2 border-cyan-400 focus:ring-cyan-400 focus:ring-2"
                    />
                    <label htmlFor="profissional" className="text-white text-sm leading-[1] cursor-pointer">
                      Profissional de marketing, vendas e operações
                    </label>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      type="radio"
                      id="estudante"
                      name="perfil"
                      value="estudante"
                      checked={formData.perfil === "estudante"}
                      onChange={(e) => handleInputChange("perfil", e.target.value)}
                      className="w-4 h-4 text-cyan-400 bg-transparent border-2 border-cyan-400 focus:ring-cyan-400 focus:ring-2"
                    />
                    <label htmlFor="estudante" className="text-white text-sm leading-[1] cursor-pointer">
                      Estudante
                    </label>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      type="radio"
                      id="outros"
                      name="perfil"
                      value="outros"
                      checked={formData.perfil === "outros"}
                      onChange={(e) => handleInputChange("perfil", e.target.value)}
                      className="w-4 h-4 text-cyan-400 bg-transparent border-2 border-cyan-400 focus:ring-cyan-400 focus:ring-2"
                    />
                    <label htmlFor="outros" className="text-white text-sm leading-[1] cursor-pointer">
                      Outros
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-4 border-t border-gray-700">
                <input
                  type="checkbox"
                  id="privacidade"
                  checked={formData.concordaPrivacidade}
                  onChange={(e) => handleInputChange("concordaPrivacidade", e.target.checked)}
                  className="w-4 h-4 text-cyan-400 bg-transparent border-2 border-gray-400 rounded focus:ring-cyan-400 focus:ring-2 mt-1"
                  required
                />
                <label htmlFor="privacidade" className="text-gray-300 text-sm leading-[1.2] cursor-pointer">
                  Concordo com a Política de Privacidade e com o uso dos meus dados para fins de atendimento e matrícula
                </label>
              </div>

              <button
                type="submit"
                className="bg-[var(--azul-neon)] rounded-full uppercase font-bold gap-2 w-fit px-5 py-3 flex mt-5 cursor-pointer"
              >Enviar <ArrowRight/>
              </button>
            </form>
          </div>

          <div className="bg-form text-center flex flex-col justify-center items-center mx-auto mt-10 md:mt-0">
            <Image className='w-[50%] mx-auto' width={500} height={500} src={"/logo-viverdeia.svg"} alt={"Viver de IA"} />
            <span className="border-1 border-[var(--azul-neon)] text-white text-[20px] rounded-full px-4 py-1 bg-[#002C2F] mt-2 w-fit">Amazônia</span>
          </div>
        </div>
      </div>

      {/* section 10 faq */}
      <div className="max-w-[800px] px-5 mx-auto mt-20 mb-10 z-10 relative">
        <h3 className="text-[var(--azul-neon)] text-center font-bold text-2xl mb-5">Tire todas as suas dúvidas</h3>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItem === item.id
            return (
              <div
                key={item.id}
                className={`border rounded-lg transition-colors duration-200 ${isOpen ? "bg-[var(--azul-neon)]" : "bg-white"}`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center rounded-lg transition-colors duration-200 cursor-pointer ${
                    isOpen ? "hover:bg-[var(--azul-neon)]" : "hover:bg-[var(--azul-neon)]"
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${isOpen ? "text-black" : "text-black hover:text-black"}`}>
                    {item.question}
                  </h3>

                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-green-200" : "text-green-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className={`leading-relaxed ${isOpen ? "text-black" : "text-black"}`}>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Footer/>
      
    </div>
  );
}