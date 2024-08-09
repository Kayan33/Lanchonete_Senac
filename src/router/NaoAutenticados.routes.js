import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalLogar from "../components/modalLogar";
import Cardapio from "../pages/cardapio";
function NaoAutenticados() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Cardapio/>}></Route>
        <Route path="/modal" element={<ModalLogar/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NaoAutenticados;
