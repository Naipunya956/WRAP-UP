import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { PageTransition } from './components/PageTransition';
import { Footer } from './components/Footer';
import {
  INTRO_STORAGE_KEY,
  OpeningLetterExperience,
} from './components/OpeningLetterExperience';
import { SoundscapeControl } from './components/SoundscapeControl';
import { HomePage } from './pages/HomePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { InsideBoxPage } from './pages/InsideBoxPage';
import { ClubPage } from './pages/ClubPage';
import { ContactPage } from './pages/ContactPage';

function getInitialIntroState(): boolean {
  try {
    return sessionStorage.getItem(INTRO_STORAGE_KEY) !== 'true';
  } catch {
    return true;
  }
}

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(getInitialIntroState);

  const handleReplayIntro = () => {
    try {
      sessionStorage.removeItem(INTRO_STORAGE_KEY);
    } catch {
      // Ignore storage access restrictions
    }
    setShowIntro(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="min-h-screen bg-[#F7F0E6] text-[#3E2624]">
          <OpeningLetterExperience
            isOpen={showIntro}
            onComplete={() => setShowIntro(false)}
          />
          <CustomCursor />
          <Navbar />
          <main>
            <PageTransition>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage onReplayIntro={handleReplayIntro} />}
                />
                <Route path="/our-story" element={<OurStoryPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/inside-the-box" element={<InsideBoxPage />} />
                <Route path="/club" element={<ClubPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                  path="*"
                  element={<HomePage onReplayIntro={handleReplayIntro} />}
                />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
          <SoundscapeControl isIntroOpen={showIntro} />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
