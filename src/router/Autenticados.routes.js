import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "../components/carrinho";

function Autenticados() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/carrinho" element={<Carrinho/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Autenticados;
