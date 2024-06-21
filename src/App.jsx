import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedBackSection from "./components/FeedBackSection.jsx";
import { useState } from "react";
import EffectsSections from "./components/EffectsSections.jsx";

export default function App() {
  const [tab, setTab] = useState("effect");
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <IntroSection />
        <TabsSection active={tab} onChang={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}
        {tab === "feedback" && (
          <>
            <FeedBackSection />
          </>
        )}
        {tab === "effect" && (
          <>
            <EffectsSections />
          </>
        )}
      </main>
    </>
  );
}
