'use strict';

import { getFilmes, getFilme } from "./filmes.js";

async function preencherDivs(dados) {
    const container = document.getElementById('container');

    dados.forEach(async item => {
        const divCol = document.createElement("div");
        divCol.classList.add("col");

        const divP3 = document.createElement("div");
        divP3.classList.add("p-3");

        const img = document.createElement("img");
        img.src = item.imagem;
        img.alt = "Imagem";
        divP3.appendChild(img);

        const p = document.createElement("p");
        p.textContent = item.texto;
        divP3.appendChild(p);

        divCol.appendChild(divP3);
        container.appendChild(divCol);
    });
}

async function preencherCards() {
    const filmes = await getFilmes();
    await preencherDivs(filmes.map(filme => ({ imagem: filme.imagem, texto: filme.texto })));
}

async function preencherCardsFilme() {
    const filmes = await getFilmes();
    const container = document.querySelector('.row');

    filmes.forEach(async filme => {
        const divCol = document.createElement('div');
        divCol.classList.add('col');

        const card = await criarCards(filme);
        divCol.appendChild(card);

        container.appendChild(divCol);
    });
}

async function criarCards(filme) {
    const card = document.createElement('div');
    card.classList.add('p-3');
    card.textContent = filme.nome;
    return card;
}

(async function() {
    await preencherCardsFilme();
    console.table(await getFilme(2));
})();