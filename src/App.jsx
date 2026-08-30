import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx"
import Home from "./pages/Home.jsx"
import Sobre from "./pages/Sobre.jsx"
import Contato from "./pages/Contato.jsx"
import PageError from "./pages/PageError.jsx";

function App() {
return (  
  <div className="min-h-screen bg-gray-900 text-white">
    <Header/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/*" element={<PageError/>} />
      </Routes>
    </div>
    <Footer/>
  </div>
)
}

export default App;
