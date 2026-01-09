
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index'
import CV from './pages/CV'
import Research from'./pages/Research'

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/research" element={<Research />} />
        </Routes>
    </BrowserRouter>
  );
}

