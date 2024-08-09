import React, { useEffect, useState } from "react";
import "../style/global.css";
import "../style/carrinho.css";

function Carrinho() {
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        const carregarCarrinho = () => {
            const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            setCarrinho(produtosCarrinho);
        };

        carregarCarrinho();
    }, []);

   
  

    const finalizarCompra = () => {
        alert("Compra finalizada com sucesso!");
        localStorage.removeItem('carrinho');
        setCarrinho([]);
    };

    return (
        <div className="checkout-container">
            <h1>Seu Carrinho</h1>
            {carrinho.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <div className="cart-items-grid">
                    {carrinho.map(produto => (
                        <article key={produto.id} className="cart-item">
                            <h3>{produto.nome}</h3>
                            <img src={produto.imagem} alt={produto.nome} />
                            <p className="item-price">R$ {produto.preco.toFixed(2)}</p>
                            <button >Remover</button>
                        </article>
                    ))}
                </div>
            )}
            {carrinho.length > 0 && (
                <div className="checkout-actions">
                    <button onClick={finalizarCompra} className="checkout-button">Finalizar Compra</button>
                </div>
            )}
        </div>
    );
}

export default Carrinho;
