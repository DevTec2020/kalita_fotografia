import { ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonyButtonsNavigationProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

export const TestimonyButtonsNavigation = ({ prevSlide, nextSlide }: TestimonyButtonsNavigationProps) => {
  return (
    <>
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute top-[65%] md:top-1/2 left-2 md:left-8 z-50 text-white transform -translate-y-1/2 hover:scale-110 transition-transform"
      >
        <ChevronLeft className="text-sm md:text-lg" />
      </button>

      <button
        onClick={nextSlide}
        className="cursor-pointer absolute top-[65%] md:top-1/2 right-2 md:right-8 z-50 text-white transform -translate-y-1/2 hover:scale-110 transition-transform"
      >
        <ChevronRight className="text-sm md:text-lg" />
      </button>
    </>
  )
}