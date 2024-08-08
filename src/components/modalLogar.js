import React, { useState } from "react";
import "../style/global.css";
import "../style/modalLogar.css";

function ModalLogar({ closeModal }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const EnviaDados = (e) => {
        e.preventDefault();
        console.log(email, senha, cpf, birthdate, phone, confirmPassword);
    }

    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>X</button>
                <h2>{isLogin ? "Login" : "Cadastro"}</h2>
                <form onSubmit={EnviaDados}>
                    <div className={`form-group ${!isLogin ? "two-columns" : ""}`}>
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
                    {!isLogin && (
                        <div className="form-group two-columns">
                            <div>
                                <label htmlFor="confirmPassword">Confirmar Senha:</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="cpf">CPF:</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="birthdate">Data de Aniversário:</label>
                                <input
                                    type="date"
                                    id="birthdate"
                                    name="birthdate"
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Celular:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
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
