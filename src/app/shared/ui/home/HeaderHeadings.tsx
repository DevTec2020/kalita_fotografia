import { Description } from "../headings/Description";
import { Title } from "../headings/Title";
import { ButtonCTA } from "../ButtonCTA";
import { HeroMosaic } from "../../../(main)/_components/Hero/HeroMosaic";

export const HeaderHeadings = () => {
  
 
  return (
    <section className="max-w-[1215px] flex justify-center items-center gap-10 lg:gap-20 md:mx-auto">
      <HeroMosaic />

      <article className=" headings-container lg:text-left lg:items-start md:w-5/12 flex flex-col gap-2 md:gap-4 items-center">

        <Title
          content={`Cada história começa com\n uma conversa`}
          size="medium"
          align="left"
        />

        <Description
          content={`Tire suas dúvidas, combine seu \n ensaio ou saiba mais sobre os \n pacotes disponíveis.`}
          size="small"
          align="center"
        />

        <ButtonCTA content="Fale comigo por whatsapp" size="medium" />
      </article>
    </section>
  );
};
