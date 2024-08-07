import React, { useState } from "react";
import "../style/global.css";
import "../style/CategoriaBusca.css";
import lanche from '../img/lanche.png';

function CategoriaBusca() {
    const [termoBusca, setTermoBusca] = useState("");

    const produtos = {
        hamburger: [
            { id: 1, nome: "HAMBÚRGUER COALA", descricao: "Hambúrguer premium de carne bovina, catupiry, farofa de bacon, alface americana e tomate, no pão brioche com maionese da casa.", preco: "R$ 34,99", imagem: lanche },
            { id: 2, nome: "HAMBÚRGUER COALA", descricao: "Hambúrguer premium de carne bovina, catupiry, farofa de bacon, alface americana e tomate, no pão brioche com maionese da casa.", preco: "R$ 34,99", imagem: lanche },
        ],
        milkshake: [
            { id: 1, nome: "MILKSHAKE CHOCOLATE", descricao: "Milkshake cremoso de chocolate com chantilly.", preco: "R$ 19,99", imagem: lanche },
            { id: 2, nome: "MILKSHAKE MORANGO", descricao: "Milkshake de morango com cobertura de morango.", preco: "R$ 19,99", imagem: lanche },
        ],
        sobremesas: [
            { id: 1, nome: "BROWNIE", descricao: "Brownie de chocolate com nozes.", preco: "R$ 15,99", imagem: lanche },
            { id: 2, nome: "TIRAMISÙ", descricao: "Tiramissù com café e mascarpone.", preco: "R$ 18,99", imagem: lanche },
        ],
        porcoes: [
            { id: 1, nome: "BATATA FRITA", descricao: "Batata frita crocante.", preco: "R$ 12,99", imagem: lanche },
            { id: 2, nome: "ONION RINGS", descricao: "Anéis de cebola empanados e fritos.", preco: "R$ 14,99", imagem: lanche },
        ],
        bebidas: [
            { id: 1, nome: "REFRIGERANTE", descricao: "Refrigerante em lata.", preco: "R$ 5,99", imagem: lanche },
            { id: 2, nome: "ÁGUA MINERAL", descricao: "Água mineral com gás.", preco: "R$ 4,99", imagem: lanche },

        ]
    };

    const textosCategorias = {
        hamburger: {
            titulo: "Lanches",
            descricao: "Novidade de hamburger artesanal!"
        },
        milkshake: {
            titulo: "Milkshake",
            descricao: "Nossos deliciosos milkshakes!"
        },
        sobremesas: {
            titulo: "Sobremesas",
            descricao: "Experimente nossas sobremesas!"
        },
        porcoes: {
            titulo: "Porções",
            descricao: "Aproveite nossas porções!"
        },
        bebidas: {
            titulo: "Bebidas",
            descricao: "Escolha uma bebida para acompanhar!"
        }
    };

    const produtosFiltrados = produtos[termoBusca] || [];
    const { titulo, descricao } = textosCategorias[termoBusca] || {};

    return (
        <div className="container-02">
            <div className="categoria-busca">
                <div className="select-container">
                    <select
                        value={termoBusca}
                        onChange={(ev) => setTermoBusca(ev.target.value)}
                    >
                        <option value="">CATEGORIA</option>
                        <option value="hamburger">Lanches</option>
                        <option value="milkshake">Milkshake</option>
                        <option value="sobremesas">Sobremesas</option>
                        <option value="porcoes">Porções</option>
                        <option value="bebidas">Bebidas</option>
                    </select>
                </div>
            </div>
            {termoBusca && (
                <div className="resultados-busca">
                    <div className="header-container">
                        <h1>{titulo}</h1>
                        <p>{descricao}</p>
                        <hr />
                    </div>
                    <div className="produtos-grid">
                        {produtosFiltrados.length > 0 ? (
                            produtosFiltrados.map(produto => (
                                <div className="produto-container" key={produto.id}>
                                    <h3>{produto.nome}</h3>
                                    <img src={produto.imagem} alt={produto.nome} />
                                    <p>{produto.descricao}</p>
                                    <p className="preco">{produto.preco}</p>
                                </div>
                            ))
                        ) : (
                            <p>Não há produtos disponíveis para esta categoria.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CategoriaBusca;
