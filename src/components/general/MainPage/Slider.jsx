import {
  Button,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SignUpForm from "../SignUp/SignUpForm";
import { useState } from "react";

const Slider = ({ slides }) => {
  const [signUp, setSignUpForm] = useState(false);

  if (slides.length == 0) {
    return null;
  }
  return (<>
  {signUp && <SignUpForm/>}
  <div className="  w-full flex justify-center py-6 px-6 2xl:px-36 shadow-xl ">
      <Carousel
        loop
        autoplay
        autoplayDelay={5000}
        className="rounded-xl "
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 bg-black rounded-full text-white -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute bg-black text-white rounded-full top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {slides.map((slide, index) => {
          return (
            <div className="flex flex-col pb-10 justify-center">
              <img
                src={slide?.picture}
                alt={slide?.title}
                className="h-96 md:h-full object-cover"
                key={index}
              />

              <div
                onClick={()=>setSignUpForm(true)}
                className=" transition ease-in-out delay-150 "
              >
                <Button className="bg-orange-400 w-full rounded-none">
                  YARIŞMAYA KATIL
                </Button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  </>

  );
};
export default Slider;
