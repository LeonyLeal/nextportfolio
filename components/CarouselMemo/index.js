import { memo, useEffect, useState } from "react";
import { Carousel as CarouselStyled } from "./style";

const CarouselMemo = () => {
  const word = ["Front-end", "Back-end", "Devops"]; //Array das palavras

  const [index, setindex] = useState(0); //index para indicar a posição do Array Word[index]
  const [words, setWords] = useState(""); // estado inicial das palavras

  const carouselWord = () => {
    const pos = index + 1 === word.length ? 0 : index + 1; //se o index + 1 for igual ao tamanho do array == 3, então vai pra zero, caso contrario add +1
    setindex(pos); //addicionando a constante na posição do array
    if(typeof window !== "undefined"){
    const carousel = window.document.getElementById("Carousel");
    carousel.animate(
      [
        { opacity: 0, transform: "translate(-1em, 0)" },
        { opacity: 1, transform: "translate(0, 0)" },
      ],
      { duration: 900 }
    ); //Animação de opacidade e indo da esquerda pra direita
    carousel.animate(
      [
        { opacity: 1, transform: "translate(0, 0)" },
        { opacity: 0, transform: "translate(1em, 0)" },
      ],
      { delay: 2200, duration: 800 }
    );
  };
}

  setTimeout(carouselWord, 2900); // delay para cada iteração

  useEffect(() => {
    setWords(word[index]);
    // eslint-disable-next-line
  }, [word]);
  return <CarouselStyled id="Carousel">{words}</CarouselStyled>;
};

export const Carousel = memo(CarouselMemo);
