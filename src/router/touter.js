import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cardapio from "../pages/cardapio";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cardapio/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
