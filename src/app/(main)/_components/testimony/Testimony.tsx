import { HeaderTestimony } from "./HeaderTestimony";
import { TestimonySlider } from "./TestimonySliders";

export const Testimony = () => {
  return (
    <section
      className={`relative overflow-hidden 
      w-full h-[132px] md:h-[532px] md:max-h-[532px] 
    `}
    >
      <div
        className={`z-10 top-0 absolute w-full h-[102%] max-w-full 
        bg-gradient-to-b from-[#2E201D]/70 to-[#2E201D]/60`}
      ></div>
      <HeaderTestimony />
      <TestimonySlider />
    </section>
  );
};
