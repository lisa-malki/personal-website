
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Index from './pages/Index'
import CV from './pages/CV'
import Research from'./pages/Research'

  function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Index />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </AnimatePresence>
    );
  }

export default function App() {

  return (
    <HashRouter>
        <AnimatedRoutes>
          <Route path="/" element={<Index />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/research" element={<Research />} />
        </AnimatedRoutes>
    </HashRouter>
  );
}

