import "./App.css";
import Header from "./Header";
import Superior from "./Superior";
import Centro from "./Centro";
import Inferior from "./Inferior";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fin from "./paginas/Camera";
import Acerca from "./paginas/acerca";
import Recordview from "./paginas/recordview";


function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        <br></br>
        <br></br>
        <div >
          <h5 class="h1">INGENIERA DE SISTEMAS NATHALY SILVA</h5>
        </div>
        
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/Camera" element={<Fin />} />
          <Route path="/recordview" element={<Recordview />} />

        </Routes>
        
      </BrowserRouter>
    

    </div>
    
  );

}

export default App;
