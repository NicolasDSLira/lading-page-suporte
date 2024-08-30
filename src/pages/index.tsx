import Image from "next/image";
import Navbar from "./components/_navbar";
import Link from "next/link";
import { Item, CardRow, Card } from "./components/card";
import Depoimentos, {Depoimento} from './components/depoimentos'
import { useEffect, useState } from "react";


function Home() {

  const [windowsWidth, setwindowsWidth] = useState(0);
  

  useEffect( () => 
  {  
    // variaveis
    const animationClass = 'anime-init';
    const windowHeight = window.innerHeight;
    const offset = windowHeight - (windowHeight / 4);

    setwindowsWidth(window.innerWidth);

    function headerElement() {
      if(window.innerWidth <= 980)
        {
          // Animação Header
          const  elementTop = document.querySelectorAll('.anime-header');
          elementTop.forEach((element) => {
            element.classList.add('header');
          });
        }else{
          const  elementTop = document.querySelectorAll('.anime-header');
          elementTop.forEach((element) => {
            element.classList.add('header');
          });
        }
    }


    if(document.readyState === "complete"){
      headerElement();
      setwindowsWidth(window.innerWidth);
    }

    window.addEventListener('resize', () => {
      setwindowsWidth(window.innerWidth);
      headerElement();
    });

    function boxTop(idBox: Element) {
      var boxOffset = idBox.getBoundingClientRect().top + window.pageYOffset;
      return boxOffset;
    }

    document.addEventListener('scroll', function() {
      const target = document.querySelectorAll('.anime');      
      function anime() 
      {
        var TopoDocumento = window.pageYOffset;
        target.forEach((element) => {
        
          if(TopoDocumento > (boxTop(element) - offset))
          {
            element.classList.add(animationClass);
          }
          else
          {
            element.classList.remove(animationClass);
          }
        });
      }

      setTimeout(anime, 250);
    
    });

  });

  function windowsResize(){
    
  }

  return (
    <>
      <Navbar></Navbar>

      <main className="max-w-screen overflow-hidden">

        <section className=" relative anime-header background-header">
          <div className="w-full lg:w-2/4  h-full flex justify-center items-center flex-col gap-10">
            <div className="w-3/4">
              <h1 className="text-4xl font-black"><span className="text-main">Suporte em TI</span> de Confiança</h1>
            </div>
            <div className="w-4/5 flex gap-4 justify-between items-center">
              <div>
                <Image 
                  height={25}
                  width={25}
                  src="./icons/job.svg"
                  alt=""/>
              </div>
              <div className="w-full">
                <p>
                  Soluções rápidas e eficazes para notebooks, desktops e servidores
                </p>
              </div>
            </div>
            <div className="w-2/4 flex justify-center items-center flex-col gap-4 lg:flex-row lg:w-3/4 ">
              <div className="w-full">
                <Link href="" className="block text-center bg-[#0E6835] border-4 border-[#0E6835] w-full py-4 text-white rounded-3xl font-bold hover:bg-[#144429] hover:border-[#144429] transition-all hover:scale-105  focus:outline-none focus:ring-4 focus:ring-[#0E6835]">
                  Entre em contato
                </Link>
              </div>
              <div className="w-full">
                <Link href="https://wa.me/551128631802" className="block text-center w-full border-4 border-[#0E6835] py-4 rounded-3xl font-bold transition-all hover:scale-105 hover:border-[#144429] focus:outline-none focus:ring-4 focus:ring-[#0E6835]">
                    Fale com um técnico
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:block" >
            <Image 
                  height={450}
                  width={794}
                  src="/image/01.jpg"
                  alt=""
                  className="absolute top-12 right-10  w-max h-max max-w-[45%] z-[-10000] rounded-2xl"/>
          </div>
        </section>

        
        {windowsWidth <= 1024 ? 
          <div className="max-w-[85vw] my-20 mx-auto gap-4 flex flex-col justify-center items-center">
            <Card
              color='main'
              title="Você está com problemas no seu computador ou servidor?"
              text="Sabemos como é frustrante quando seus dispositivos não funcionam corretamente. Problemas técnicos podem atrapalhar seu trabalho e sua vida pessoal."
              arrow="TRUE" />

            <Card
              color='segunda'
              title="Não deixe que problemas técnicos afetem sua produtividade"
              text="Cada minuto perdido tentando resolver falhas pode custar caro. Atrasos, frustrações e perda de dados são apenas algumas das consequências de não resolver os problemas de TI rapidamente."
              arrow="TRUE" />

            <Card
              color='main'
              title="Você está com problemas no seu computador ou servidor?"
              text="Sabemos como é frustrante quando seus dispositivos não funcionam corretamente. Problemas técnicos podem atrapalhar seu trabalho e sua vida pessoal."
              arrow="FALSE " />
          </div>
        : 
          <div className="flex min-w-0 mx-20 items-stretch gap-4 anime anime-left overflow-hidden">
            <CardRow 
              color="main"
              title="Você está com problemas no seu computador ou servidor?"
              text="Sabemos como é frustrante quando seus dispositivos não funcionam corretamente. Problemas técnicos podem atrapalhar seu trabalho e sua vida pessoal."
              arrow="TRUE"/>   

              <CardRow 
              color="segunda"
              title="Não deixe que problemas técnicos afetem sua produtividade"
              text="Cada minuto perdido tentando resolver falhas pode custar caro. Atrasos, frustrações e perda de dados são apenas algumas das consequências de não resolver os problemas de TI rapidamente."
              arrow="TRUE"/>   

              <CardRow 
              color="main"
              title="A Raiztec está aqui para ajudar !"
              text="Oferecemos serviços de manutenção em notebooks, desktops e servidores, além de um Help Desk pronto para resolver suas dores tecnológicas. Com atendimento de qualidade, preço justo e ótimos prazos, garantimos sua satisfação."
              arrow="FALSE"/>     
          </div>
        }
        

        <div id="manutencao"  className="flex items-center justify-center gap-10 flex-col w-3/4 mx-auto my-10">

          <div>
            <h1 className="text-3xl text-center font-black">Manutenção em <span className="text-main">Notebook e desktop</span>
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:place-items-center ">
            <Item>Troca de Tela de Notebook</Item>
            <Item>Melhorias em Notebooks e Computadores</Item>
            <Item>Limpeza Interna e Troca da Pasta Térmica</Item>
            <Item>Troca de Teclado de Notebook</Item>
            <Item>Formatação e Instalação de Sistema Operacional</Item>
          </div>

        </div>

        <Depoimentos>
          <Depoimento>
            <h1 className="text-xl font-bold text-ellipsis">Daniel Felix</h1>
            <p>Exelente experiência, muito bom atendimento, serviço foi entregue rápido e valor super justo, dão garantia e mesmo após ser entregue o meu notbook, ainda continuaram sendo atenciosos e perguntando se esta tudo certo. muito satisfeito, supe indico!!</p>
          </Depoimento>
          <Depoimento>
            <h1 className="text-xl font-bold text-ellipsis">Daniel Felix</h1>
            <p>Exelente experiência, muito bom atendimento, serviço foi entregue rápido e valor super justo, dão garantia e mesmo após ser entregue o meu notbook, ainda continuaram sendo atenciosos e perguntando se esta tudo certo. muito satisfeito, supe indico!!</p>
          </Depoimento>
        </Depoimentos>

      </main>
      <footer></footer>
    </>
  )
}

export default Home
