import React, { useState } from "react";
import "../../style/global.css";
import "../../style/modalLogar.css";
import logo from '../../img/logoShekina 1.png';

function ModalLogar({ closeModal }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const EnviaDados = (e) => {
        e.preventDefault();
        console.log(email, senha);
    }

    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal-content">
              <img src={logo}></img>
                <h3>administrador</h3>
                <form onSubmit={EnviaDados}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                   
                    <button type="submit">Entar</button>
                </form>
            </div>
        </div>
    );
}

export default ModalLogar;
