import { useEffect, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";

const Slider = ({ slides, title }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex((prev) => ++prev);
    } else {
      setSlideIndex(0);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => --prev);
    } else {
      setSlideIndex(slides.length - 1);
    }
  };
  return (
    <div className="p-4 md:px-48">
        <div className="mb-4 text-center italic text-2xl">{title}</div>
    <div className="flex flex-row justify-between">
        
        <div className="flex items-center">
          <HiArrowSmallLeft onClick={handlePrev} size={42} />
        </div>
        <div className="flex flex-col content-center justify-center">
          <img
          
            className="rounded-3xl max-h-80"
            src={slides[slideIndex].image}
            alt={slides[slideIndex].title}
          />
          <div className="rounded-md text-center bg-cyan-50 opacity-75 mt-6">
           {slides[slideIndex].body}
         </div>
        </div>
        <div className="flex items-center">
          <HiArrowSmallRight onClick={handleNext} size={42} />
        </div>
      </div>
    
    </div>
    
  );
};

export default Slider;
