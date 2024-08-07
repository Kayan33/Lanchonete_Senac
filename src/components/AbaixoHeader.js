import React from "react";
import "../style/global.css";
import "../style/AbaixoHeader.css";
import LancheGrande from '../img/lanchegrande.png';

function AbaixoHeader() {
    return (
        <div className="container-img" style={{ backgroundImage: `url(${LancheGrande})` }}>
            <h1>CARDÁPIO</h1>
            <div className="onda">

            </div>
        </div>
    );
}

export default AbaixoHeader;
