import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB]">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
