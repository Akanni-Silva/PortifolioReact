import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";

import Sobre from "./pages/sobre/sobre";
import Projetos from "./pages/projetos/projetos";
import Contato from "./pages/contato/contato";
import Resultados from "./pages/resultados/resultados";

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
