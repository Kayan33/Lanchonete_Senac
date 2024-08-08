import React, { useState } from "react";
import "../style/global.css";
import "../style/header.css";
import logo from '../img/logoShekina 1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import ModalLogar from '../components/modalLogar'; 

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="container">
                <img src={logo} alt="Logo Shekina" />
                <ul className="flex-container">
                    <li className="flex-item">
                        <a href="#!">Baixe APP</a>
                    </li>
                    <li className="flex-item">
                        <a href="#!">Cupom</a>
                    </li>
                </ul>
                <ul className="flex-container">
                    <li className="flex-item">
                        <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#D5F5F9" }} />
                    </li>
                    <li className="flex-item">
                        <a href="#!" onClick={openModal} className="logar">
                            logar-me
                        </a>
                        
                    </li>
                </ul>
            </div>

            {isModalOpen && (
                <ModalLogar closeModal={closeModal} />
            )}
        </>
    );
}

export default Header;
