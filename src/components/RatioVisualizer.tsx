import React from "react";

interface Props {
  juice: number;
  people: number;
  lang: "en" | "es";
}

export default function RatioVisualizer({ juice, people, lang }: Props) {
  const ratio = (juice / people).toFixed(2);

  const strings = {
    en: {
      statement: `The ratio of juice to people is ${juice}:${people} or about ${ratio} cups per person.`,
      frame: "The ratio of ___ to ___ is ___.",
    },
    es: {
      statement: `La razón de jugo a personas es ${juice}:${people} o aproximadamente ${ratio} tazas por persona.`,
      frame: "La razón de ___ a ___ es ___.",
    },
  };

  return (
    <div className="visualizer">
      <p>{strings[lang].statement}</p>
      <p><em>{strings[lang].frame}</em></p>
      <div className="bars">
        <div className="bar juice" style={{ height: juice * 10 }}></div>
        <div className="bar people" style={{ height: people * 10 }}></div>
      </div>
    </div>
  );
}
