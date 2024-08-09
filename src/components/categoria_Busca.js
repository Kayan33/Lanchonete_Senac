import React, { useEffect, useState } from "react";
import "../style/global.css";
import "../style/CategoriaBusca.css";
import { api } from '../data/provider';

const categoriaNomes = {
    1: "Lanches",
    2: "Milkshake",
    3: "Bebidas",
};

function CategoriaBusca() {
    const [termoBusca, setTermoBusca] = useState("");

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/produtos');
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao buscar os produtos:", error);
            }
        };

        fetchData();
    }, []);

    const produtosFiltrados = termoBusca 
        ? produtos.filter(produto => produto.categoria === parseInt(termoBusca)) 
        : produtos;

    const categorias = [...new Set(produtos.map(produto => produto.categoria))];

    const renderCategoria = (categoria) => {
        const produtosCategoria = produtosFiltrados.filter(produto => produto.categoria === categoria);
        if (produtosCategoria.length === 0) return null;

        return (
            <section key={categoria} className="resultados-busca">
                <header className="header-container">
                    <h1>{categoriaNomes[categoria]}</h1>
                    <p>Melhores produtos de {categoriaNomes[categoria]}</p>
                    <hr />
                </header>
                <div className="produtos-grid">
                    {produtosCategoria.map(produto => (
                        <article
                            key={produto.id}
                            className="produto-container"
                        >
                            <h3>{produto.nome}</h3>
                            <img src={produto.imagem} alt={produto.nome} />
                            <p>{produto.descricao}</p>
                            <p className="preco">R$ {produto.preco.toFixed(2)}</p>
                            
                        </article>
                    ))}
                </div>
            </section>
        );
    };

    return (
        <div className="container-02">
            <div className="categoria-busca">
                <div className="select-container">
                    <select
                        value={termoBusca}
                        onChange={(ev) => setTermoBusca(ev.target.value)}
                    >
                        <option value="">TODOS</option>
                        <option value="1">Lanches</option>
                        <option value="2">Milkshake</option>
                        <option value="3">Bebidas</option>
                    </select>
                </div>
            </div>

            {termoBusca
                ? renderCategoria(parseInt(termoBusca))
                : categorias.map(categoria => renderCategoria(categoria))
            }

        </div>
    );
}

export default CategoriaBusca;
