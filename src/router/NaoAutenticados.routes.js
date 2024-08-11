import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalLogar from "../components/modalLogar";
import Cardapio from "../pages/cardapio";
import LoginAdmin from "../components/admin/login";
function NaoAutenticados() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Cardapio/>}></Route>
        <Route path="/modal" element={<ModalLogar/>}></Route>
        <Route path="/login/admin" element={<LoginAdmin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NaoAutenticados;
