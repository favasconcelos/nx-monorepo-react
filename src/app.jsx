import { AboutPage } from '@app/about-page';
import { LandingPage } from '@app/landing-page';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}