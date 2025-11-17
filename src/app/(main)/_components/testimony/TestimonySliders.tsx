"use client";
import { useState } from "react";
import { testimonySlidePayload } from "../content";
import { TestimonyButtonsNavigation } from "./SlideButton";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FigCaption } from "./Figcaption";

export const TestimonySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonySlidePayload.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonySlidePayload.length) % testimonySlidePayload.length
    );
  };

  const currentSlide = testimonySlidePayload[currentIndex];

  return (
    <section className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.figure
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            priority={true}
            src={currentSlide.source}
            fill
            alt={currentSlide.alt}
            className="w-full h-full object-cover filter  saturate-110 brightness-90 contrast-105"
          />

          <FigCaption
            testimony={currentSlide.testimony}
            sessionName={currentSlide.sessionName}
            clientName={currentSlide.clientName}
          />
        </motion.figure>
      </AnimatePresence>

      <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {testimonySlidePayload.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 h-1 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
      <TestimonyButtonsNavigation prevSlide={prevSlide} nextSlide={nextSlide} />
    </section>
  );
};
