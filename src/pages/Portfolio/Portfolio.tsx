import { Link } from "react-router-dom";

import newborn from "../../assets/newborn.webp";
import pregnant from "../../assets/pregnant_.webp";
import wedding from "../../assets/wedding_.webp";
import christmas from "../../assets/christmas.webp";
import PortfolioCard from "./_components/PortfolioCardProps/PortfolioCard";

// Lista de cards do portfólio com imagens, textos e margens personalizadas

const portfolioItems = [
  {
    title: "gestantes",
    image: pregnant,
    alt: "Foto de uma mulher grávida em ensaio fotográfico",
    path: "#",
  },
  {
    title: "nascimentos",
    image: newborn,
    alt: "Foto de um par de sapatinhos de recém-nascido",
    path: "#",
  },
  {
    title: "ensaios em casa",
    image: wedding,
    alt: "Foto de um parto",
    path: "#",
  },
  {
    title: "natal",
    image: christmas,
    alt: "Foto temática de Natal",
    path: "#",
  },
];

const Portfolio = () => {
  return (
  <>
    <title>Portfólio | Ensaio Fotográfico Profissional</title>
    <meta
      name="description"
      content="Confira os ensaios fotográficos realizados por Kalita Fotografia. Especializada em newborn, gestantes, partos e fotos temáticas como o Natal."
    />
    <meta
      name="keywords"
      content="fotografia, portfólio, ensaio fotográfico, newborn, gestantes, partos, fotos natalinas"
    />
    <meta name="author" content="Kalita Fotografia" />
    <meta property="og:title" content="Portfólio | Ensaio Fotográfico Profissional" />
    <meta
      property="og:description"
      content="Veja os ensaios fotográficos realizados por Kalita Fotografia."
    />
    <meta property="og:image" content="URL_DA_IMAGEM_DESTAQUE" />
    <meta property="og:url" content="URL_DA_PAGINA" />

    <main className="font-homeKalita flex justify-center flex-col items-center h-full">
      <section className="relative flex flex-col justify-start items-center xl:h-[170px] h-0 xl:mb-0 mb-15">
        <h1 className="xl:font-homeKalita font-lato z-10 xl:text-6xl text-[40px] xl:font-light font-semibold text-primary xl:mt-10 mt-5">Portfólio</h1>
        <div className="hidden xl:flex absolute z-0 w-[422px] h-[45px] bg-fundo mt-11" />
      </section>

      <section className="relative w-full xl:h-[863px] h-full mb-10 flex justify-center items-center">
        <div className="w-full xl:max-xl:w-2xl xl:overflow-x-hidden overflow-x-scroll overflow-y-hidden h-full flex flex-nowrap xl:justify-center justify-start xl:items-start items-center xl:gap-7.5 gap-9.5 z-30 xl:mt-16 mt-10 px-[calc(40vw-132px)]">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item}/>
          ))}
        </div>
        <div className="hidden xl:flex none absolute w-full h-[526px] top-0 bg-fundo" />
      </section>
    </main>
  </>
  );
};

export default Portfolio;