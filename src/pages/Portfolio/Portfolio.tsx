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

    <main className="font-homeKalita bg-quaternary flex justify-center flex-col items-center h-full">
      <section className="relative flex flex-col justify-start items-center xl:h-[170px] h-0 xl:mb-0 mb-10">
        <h1 className="z-10 text-6xl font-light text-primary mt-10">Portfolio</h1>
        <div className="hidden xl:flex absolute z-0 w-[422px] h-[45px] bg-fundo mt-11" />
      </section>

      <section className="relative w-full xl:h-[863px] h-full mb-10 flex justify-center items-center">
        <div className="w-full xl:w-7xl h-full flex justify-center xl:items-start items-center gap-7.5 z-30 flex-wrap max-xl:w-2xl max-sm:w-[300px] xl:mt-16 mt-40">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item}/>
          ))}
        </div>
        <div className="hidden xl:flex absolute w-full h-[526px] top-0 bg-fundo" />
      </section>
    </main>
  </>
  );
};

export default Portfolio;