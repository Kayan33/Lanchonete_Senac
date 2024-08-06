import React from "react";
import "../style/global.css";
import "../style/header.css";
import logo from '../img/logoShekina 1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCartShopping, faMobile, faRightToBracket, faTicket } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div className="container">
            <img src={logo} alt="Logo Shekina" />
            <ul className="flex-container">
                <li className="flex-item">
                    <h3>Baixe APP</h3>
                    <FontAwesomeIcon icon={faMobile} size="xl" />
                    
                </li>
                <li className="flex-item">
                    <h3>Cupom</h3>
                    <FontAwesomeIcon icon={faTicket} size="xl" />
                </li>
                <li className="flex-item">
                    <h3>Carrinho</h3>
                    <FontAwesomeIcon icon={faCartShopping} size="xl" />
                </li>
            </ul>
            <div className="login">
                <h3>Log in</h3>
                <FontAwesomeIcon icon={faRightToBracket} size="xl" />
            </div>
        </div>
    );
}

export default Header;
