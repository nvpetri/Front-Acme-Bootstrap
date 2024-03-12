'use strict'

import { getFilmes } from "./filmes.js"


async function preencherCardsFilme() {
    const filmes = await getFilmes()
    const container = document.querySelector('.row')

    for (const filme of filmes) {
        const divCol = document.createElement('div')
        divCol.classList.add('col')

        const card = await criarCards(filme)
        divCol.appendChild(card)

        container.appendChild(divCol)
    }
}

async function criarCards(filme) {
    const card = document.createElement('div')
    card.classList.add('p-3')

    const imagemDoFilme = document.createElement('img')
    imagemDoFilme.src = filme.foto_capa
    imagemDoFilme.alt = filme.nome
    imagemDoFilme.classList.add('imagemDoFilme')
    card.appendChild(imagemDoFilme)

    const divName = document.createElement('div')
    card.appendChild(divName)
    divName.classList.add('divName')

    const nomeDoFilme = document.createElement('p')
    nomeDoFilme.textContent = filme.nome
    nomeDoFilme.classList.add('nomeDoFilme')
    divName.appendChild(nomeDoFilme)

    return card
}

(async function() {
    await preencherCardsFilme()
})()