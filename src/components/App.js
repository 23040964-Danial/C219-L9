
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Diplomas from "./Diplomas";
import DiplomaDetails from "./DiplomaDetails";
import ModuleDetails from "./ModuleDetails";
import Register from "./Register";
import FAQ from "./FAQ";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diplomas" element={<Diplomas />} />
          <Route path="/diplomas/:diplomaId" element={<DiplomaDetails />} />
          <Route path="/diplomas/:diplomaId/:moduleId" element={<ModuleDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <footer className="container">
          &copy;2025 | Republic Polytechnic School of Infocomm
        </footer>
      </div>
    </Router>
  );
}

export default App;