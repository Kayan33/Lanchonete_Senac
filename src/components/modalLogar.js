import React, { useState } from "react";
import "../style/global.css";
import "../style/modalLogar.css";

function ModalLogar() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="modal-container">
            <div className="modal-content">
                <h2>{isLogin ? "Login" : "Cadastro"}</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar Senha:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" required />
                        </div>
                    )}
                    <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>
                </form>
                <button className="toggle-button" onClick={toggleForm}>
                    {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem uma conta? Faça login"}
                </button>
            </div>
        </div>
    );
}

export default ModalLogar;

