import React from "react";

interface Props {
  juice: number;
  setJuice: (n: number) => void;
  people: number;
  setPeople: (n: number) => void;
  lang: "en" | "es";
  onRandomize: () => void;
  onReset: () => void;
}

export default function Controls({
  juice,
  setJuice,
  people,
  setPeople,
  lang,
  onRandomize,
  onReset,
}: Props) {
  const strings = {
    en: {
      juice: "Cups of Juice",
      people: "Number of People",
      randomize: "Randomize Example",
      reset: "Reset",
    },
    es: {
      juice: "Tazas de Jugo",
      people: "Número de Personas",
      randomize: "Ejemplo Aleatorio",
      reset: "Reiniciar",
    },
  };

  return (
    <div className="controls" role="region" aria-label={lang === "en" ? "Controls" : "Controles"}>
      <label>
        {strings[lang].juice}: <strong>{juice}</strong>
        <input
          aria-label={strings[lang].juice}
          type="range"
          min="1"
          max="10"
          value={juice}
          onChange={(e) => setJuice(Number(e.target.value))}
        />
      </label>
      <label>
        {strings[lang].people}: <strong>{people}</strong>
        <input
          aria-label={strings[lang].people}
          type="range"
          min="1"
          max="20"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />
      </label>

      <div className="control-buttons">
        <button onClick={onRandomize} aria-label={strings[lang].randomize} className="btn primary">
          🎲 {strings[lang].randomize}
        </button>
        <button onClick={onReset} aria-label={strings[lang].reset} className="btn">
          ↩️ {strings[lang].reset}
        </button>
      </div>
    </div>
  );
}
