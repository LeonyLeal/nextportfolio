import { memo, useEffect, useState } from "react";

const words = ["Front-end", "Back-end", "DevOps"];

const CarouselMemo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1 === words.length ? 0 : current + 1));
    }, 2900);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <p
      key={words[index]}
      id="Carousel"
      className="about-carousel-word mx-auto w-fit select-none pb-4 text-[2rem] font-light [-webkit-user-drag:none]"
    >
      {words[index]}
    </p>
  );
};

export const Carousel = memo(CarouselMemo);
