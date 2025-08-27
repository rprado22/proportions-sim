import React, { useState } from "react";

interface Props {
  lang: "en" | "es";
}

export default function ExitTicket({ lang }: Props) {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = {
    en: [
      "If 3 cups of juice serve 6 people, how many cups for 12 people?",
      "Is the ratio 2:3 equivalent to 4:6?",
      "If 5 pencils cost $10, how much for 8 pencils?"
    ],
    es: [
      "Si 3 tazas de jugo sirven a 6 personas, ¿cuántas tazas para 12 personas?",
      "¿Es equivalente la razón 2:3 a 4:6?",
      "Si 5 lápices cuestan $10, ¿cuánto cuestan 8 lápices?"
    ]
  };

  const answers = ["6 cups", "Yes", "$16"];

  return (
    <div className="exit-ticket">
      <h3>{lang === "en" ? "Exit Ticket" : "Boleto de Salida"}</h3>
      <ol>
        {questions[lang].map((q, i) => (
          <li key={i}>
            {q}
            {showAnswers && <p className="answer">{answers[i]}</p>}
          </li>
        ))}
      </ol>
      <button onClick={() => setShowAnswers(!showAnswers)}>
        {showAnswers ? (lang === "en" ? "Hide Answers" : "Ocultar Respuestas") : (lang === "en" ? "Show Answers" : "Mostrar Respuestas")}
      </button>
    </div>
  );
}
