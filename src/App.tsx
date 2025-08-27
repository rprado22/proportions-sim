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
      randomHint: "Randomized a proportional pair (same unit rate).",
      resetHint: "Reset to the starting example.",
    },
    es: {
      title: "Explorador de Proporciones",
      subtitle: "Ajusta los controles para probar relaciones proporcionales.",
      teacherTip:
        "Consejo: Anime a los estudiantes a verificar si las razones son equivalentes multiplicando o dividiendo, no solo multiplicando en cruz.",
      language: "English",
      randomHint: "Se generó un par proporcional (misma tasa unitaria).",
      resetHint: "Reinicio al ejemplo inicial.",
    },
  };

  const [status, setStatus] = useState<string>("");

  // Create a proportional pair by selecting a tiny base ratio (a:b) and a scale k.
  function handleRandomize() {
    const a = Math.floor(Math.random() * 5) + 1; // 1..5
    const b = Math.floor(Math.random() * 5) + 1; // 1..5
    // pick k so results fit slider limits (juice<=10, people<=20)
    const maxK = Math.min(Math.floor(10 / a), Math.floor(20 / b));
    const k = Math.max(1, Math.floor(Math.random() * maxK) + 1);
    const newJuice = a * k;
    const newPeople = b * k;
    setJuice(newJuice);
    setPeople(newPeople);
    setStatus(strings[lang].randomHint);
    // clear status after 2s
    setTimeout(() => setStatus(""), 2000);
  }

  function handleReset() {
    setJuice(2);
    setPeople(4);
    setStatus(strings[lang].resetHint);
    setTimeout(() => setStatus(""), 2000);
  }

  return (
    <div className="app">
      <header>
        <h1>{strings[lang].title}</h1>
        <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
          {strings[lang].language}
        </button>
        <p>{strings[lang].subtitle}</p>
        {status && <div role="status" aria-live="polite" className="status">{status}</div>}
      </header>

      <Controls
        juice={juice}
        setJuice={setJuice}
        people={people}
        setPeople={setPeople}
        lang={lang}
        onRandomize={handleRandomize}
        onReset={handleReset}
      />

      <RatioVisualizer juice={juice} people={people} lang={lang} />

      <ExitTicket lang={lang} />

      <footer>
        <p><strong>Teacher Tip:</strong> {strings[lang].teacherTip}</p>
      </footer>
    </div>
  );
}
