import React, { useState } from "react";

export default function Home() {
  const [buttonStyle, setButtonStyle] = useState({
    left: "50px",
    top: "350px",
  });

  const moveButtonRandomly = () => {
    const maxWidth = window.innerWidth - 180; // Substitua 150 pelo tamanho desejado para o botão
    const maxHeight = window.innerHeight - 50; // Substitua 50 pelo tamanho desejado para o botão
    const newLeft = Math.floor(Math.random() * maxWidth);
    const newTop = Math.floor(Math.random() * maxHeight);

    setButtonStyle({
      left: `${newLeft}px`,
      top: `${newTop}px`,
      transition: 'left 0.3s ease, top 0.3s ease',

    });
  };

  return (
    <main className="flex flex-col content-center items-center text-center p-3">
      <h1 className="text-xl font-bold">
        O mistério para se conseguir o primeiro emprego
      </h1>
      <h1 className="text-xl font-semibold">
        o que devemos estudar para chegar lá rapidamente?
      </h1>
      <h1 className="text-xl font-semibold">
        dica do Bart!
      </h1>
      <button
        className="buttons"
        style={buttonStyle}
        onMouseOver={moveButtonRandomly}
      >
        click e descubra!
      </button>
    </main>
  );
}
