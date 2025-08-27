import React, { useState } from "react";
import Controls from "./components/Controls";
import RatioVisualizer from "./components/RatioVisualizer";
import ExitTicket from "./components/ExitTicket";

export default function App() {
  const [juice, setJuice] = useState(2);
  const [people, setPeople] = useState(4);
  const [lang, setLang] = useState<"en" | "es">("en");

  const strings = {
    en: {
      title: "Proportions Explorer",
      subtitle: "Adjust the sliders to test proportional relationships.",
      teacherTip:
        "Tip: Encourage students to check if the ratios are equivalent by multiplying or dividing, not just cross multiplying.",
      language: "Español",
    },
    es: {
      title: "Explorador de Proporciones",
      subtitle: "Ajusta los controles para probar relaciones proporcionales.",
      teacherTip:
        "Consejo: Anime a los estudiantes a verificar si las razones son equivalentes multiplicando o dividiendo, no solo multiplicando en cruz.",
      language: "English",
    },
  };

  return (
    <div className="app">
      <header>
        <h1>{strings[lang].title}</h1>
        <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
          {strings[lang].language}
        </button>
        <p>{strings[lang].subtitle}</p>
      </header>

      <Controls juice={juice} setJuice={setJuice} people={people} setPeople={setPeople} lang={lang} />
      <RatioVisualizer juice={juice} people={people} lang={lang} />

      <ExitTicket lang={lang} />

      <footer>
        <p><strong>Teacher Tip:</strong> {strings[lang].teacherTip}</p>
      </footer>
    </div>
  );
}
