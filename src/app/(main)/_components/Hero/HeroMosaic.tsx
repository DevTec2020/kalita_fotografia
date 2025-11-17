import Image from "next/image";

export const HeroMosaic = () => {
  return (
    <div className="hidden md:flex grid-proporcional">
      <figure className="flex-1  relative">
        <Image
        priority
          src={"./casal-gravidos.svg"}
          alt="Uma foto de um casal feliz com a mulher grávida"
          fill
          className="bg-cover"
        />
      </figure>
      <figure className="flex-1 flex flex-col justify-center">
        <div className=" flex-1 relative">
           <Image
           priority
            src={"./mae-amamentando-filho-recem-nascido.svg"}
            alt="Uma foto de um casal feliz com a mulher grávida"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className=" flex-1 relative">
          <Image
          priority
            src={"./pais-abracando-uma-crianca.svg"}
            alt="Uma foto de um casal feliz com a mulher grávida"
            fill
            className="object-cover object-top"
          />
        </div>
      </figure>
    </div>
  );
};
