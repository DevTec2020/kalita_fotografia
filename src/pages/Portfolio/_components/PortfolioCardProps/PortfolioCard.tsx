import { Link } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  image: string;
  alt: string;
  path: string;
}

const PortfolioCard = ({ title, image, alt, path, }: PortfolioCardProps) => {
  return (
    <article
      className={`flex relative xl:bg-quaternary bg-transparent w-[264px] xl:h-[500px] h-[550px] nth-[odd]:mt-15 mt-20 mb-14`}
    >
      <div className="absolute xl:top-[-18px] top-[-11px] w-full flex xl:justify-evenly justify-center items-center xl:gap-0 gap-4">
        <div className="xl:w-[34px] lg:w-[34px] w-[17px] h-[2px] bg-primary" />
        <p className="text-3xl text-primary">{title}</p>
      </div>

      <figure>
        <img
          className="absolute top-8 xl:mt-[9px] mt-0 xl:ml-[30px] ml-8"
          src={image}
          alt={alt}
        />
      </figure>

      <Link
        className="absolute flex justify-center items-center text-center w-[134px] h-[34px] text-2xl text-primary font-light bg-fundo 
        xl:bottom-[-76px] bottom-[-20px] xl:right-[-55px] right-[35px] pt-1 z-10"
        to={path}
      >
        Ver fotos
      </Link>
    </article>
  );
};

export default PortfolioCard