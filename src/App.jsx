import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Home.jsx"
import Assinatura from "./pages/Assinatura.jsx"
import Sobre from "./pages/Sobre.jsx"
import Contato from "./pages/Contato.jsx"

function App() {
return (  
  <div className="min-h-screen bg-gray-900 text-white">
    <Header/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/assinatura" element={<Assinatura/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </div>
    <Footer/>
  </div>
)
}

export default App;
