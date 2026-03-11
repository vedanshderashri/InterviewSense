import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LiquidCursor from './components/LiquidCursor';
import Home from './pages/Home';
import Setup from './pages/Setup';
import Interview from './pages/Interview';
import Dashboard from './pages/Dashboard';
import Methodology from './pages/Methodology';
import useSmoothScroll from './hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col">
      <LiquidCursor />
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/methodology" element={<Methodology />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
