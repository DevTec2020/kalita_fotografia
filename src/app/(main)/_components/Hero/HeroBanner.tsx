import Image from "next/image";
import { slidePayload } from "./content";

export const HeroBanner = () => {


  return (
    <article className="pb-10 flex mx-auto">
      {slidePayload.map((slide, index) => (
        <figure 
          key={index}
          className={`
            ${slide.mobile ? 'flex' : 'hidden md:flex'} 
            flex-1 h-[165px] md:h-[440px] relative hover:filter
          `}
        >
          <Image
            priority={true}
            quality={100}
            src={slide.source}
            width={480}
            height={480}
            alt={slide.alt}
            className="w-full h-full object-cover bg-center"
          />
        </figure>
      ))}
    </article>
  );
};