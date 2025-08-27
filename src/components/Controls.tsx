import React from "react";

interface Props {
  juice: number;
  setJuice: (n: number) => void;
  people: number;
  setPeople: (n: number) => void;
  lang: "en" | "es";
}

export default function Controls({ juice, setJuice, people, setPeople, lang }: Props) {
  const strings = {
    en: { juice: "Cups of Juice", people: "Number of People" },
    es: { juice: "Tazas de Jugo", people: "Número de Personas" },
  };

  return (
    <div className="controls">
      <label>
        {strings[lang].juice}: {juice}
        <input
          type="range"
          min="1"
          max="10"
          value={juice}
          onChange={(e) => setJuice(Number(e.target.value))}
        />
      </label>
      <label>
        {strings[lang].people}: {people}
        <input
          type="range"
          min="1"
          max="20"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
