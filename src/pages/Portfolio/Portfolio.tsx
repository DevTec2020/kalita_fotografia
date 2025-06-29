import { Link } from "react-router-dom";

import newborn from "../../assets/newborn.png";
import pregnant from "../../assets/pregnant.png";
import wedding from "../../assets/wedding.png";
import christmas from "../../assets/christmas.png";

// Lista de cards do portfólio com imagens, textos e margens personalizadas

const portfolioItems = [
  {
    title: "nascimentos",
    image: newborn,
    alt: "Foto de um par de sapatinhos de recém-nascido",
    path: "#",
    marginTop: "mt-[120px]",
  },
  {
    title: "gestantes",
    image: pregnant,
    alt: "Foto de uma mulher grávida em ensaio fotográfico",
    path: "#",
    marginTop: "mt-[68px]",
  },
  {
    title: "ensaios em casa",
    image: wedding,
    alt: "Foto de um parto",
    path: "#",
    marginTop: "mt-[120px]",
  },
  {
    title: "natal",
    image: christmas,
    alt: "Foto temática de Natal",
    path: "#",
    marginTop: "mt-[68px]",
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
    <main className="font-homeKalita bg-quaternary flex justify-center flex-col items-center">
      <section className="relative flex flex-col justify-start items-center h-[170px]">
        <h1 className="z-10 text-6xl font-light text-primary mt-10">Portfolio</h1>
        <div className="absolute z-0 w-[422px] h-[45px] bg-fundo mt-11" />
      </section>

      <section className="relative w-full h-[863px] flex justify-center items-center">
        <div className="w-7xl h-full flex justify-center gap-7.5 items-start z-30">
          {portfolioItems.map((item, index) => (
            <article
              key={index}
              className={`flex relative bg-quaternary w-[264px] h-[500px] ${item.marginTop}`}
            >
              <div className="absolute top-[-18px] w-full flex justify-evenly items-center">
                <div className="w-[34px] h-[2px] bg-primary" />
                <p className="text-3xl text-primary">{item.title}</p>
              </div>
              <figure>
                <img
                  className="absolute top-0 mt-[43px] ml-[30px]"
                  src={item.image}
                  alt={item.alt}
                  />
              </figure>
              <Link
                className="absolute flex justify-center items-center text-center w-[134px] h-[34px] text-2xl text-primary font-light bg-fundo bottom-[-76px] right-[-55px] pt-1 z-10"
                to={item.path}
                >
                Ver fotos
              </Link>
            </article>
          ))}
        </div>
        <div className="absolute w-full h-[526px] top-0 bg-fundo" />
      </section>
    </main>
  </>
  );
};

export default Portfolio;