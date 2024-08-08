import React from "react";
import "../style/global.css";
import "../style/header.css";
import logo from '../img/logoShekina 1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser,} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="container">
            <img src={logo} alt="Logo Shekina" />
            <ul className="flex-container">
                <li className="flex-item">
                    <Link to="Cadastrar">
                    Baixe APP
                    </Link>
                </li>
                <li className="flex-item">
                    <Link to="Cadastrar">
                    Cupom
                    </Link>
                </li>
            </ul>
            <ul className="flex-container">

                <li className="flex-item">
                    <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#D5F5F9" }} />
                </li>
                <li className="flex-item">
                    <Link to="modal">
                        Cadastrar
                    </Link>
                    <FontAwesomeIcon icon={faUser} size="xl" />
                </li>
            </ul>
        </div>
    );
}

export default Header;
