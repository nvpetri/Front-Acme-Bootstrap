'use strict'

import { getFilmes, getFilmeNome } from "./filmes.js"

const campoPesquisa = document.getElementById('input-pesquisa')

campoPesquisa.addEventListener('input', function() {
    let nomeFilme = campoPesquisa.value

    if (nomeFilme == '') {
        nomeFilme = null
    }

    preencherCardsFilme(nomeFilme)
})


async function preencherCardsFilme(nomeFilme) {

    if (nomeFilme == null) {
        const filmes = await getFilmes()
        const container = document.querySelector('.row')

        for (const filme of filmes) {

            const divCol = document.createElement('div')
            divCol.classList.add('col')

            const card = await criarCards(filme)
            divCol.appendChild(card)

            container.appendChild(divCol)
        }
    } else {
        const filmes = await getFilmeNome(nomeFilme)

        const container = document.querySelector('.row')
        container.innerHTML = ''

        for (const filme of filmes) {
            const divCol = document.createElement('div')
            divCol.classList.add('col')

            const card = await criarCards(filme)
            divCol.appendChild(card)

            container.appendChild(divCol)
        }
    }
}

async function criarCards(filme) {
    const card = document.createElement('div')
    card.classList.add('p-3', 'filme-card')
    card.dataset.id = filme.id

    const imagemDoFilme = document.createElement('img')
    imagemDoFilme.src = filme.foto_capa
    imagemDoFilme.alt = filme.nome
    imagemDoFilme.classList.add('imagemDoFilme')
    card.appendChild(imagemDoFilme)

    const divName = document.createElement('div')
    divName.classList.add('divName')

    const nomeDoFilme = document.createElement('p')
    nomeDoFilme.textContent = filme.nome
    nomeDoFilme.classList.add('nomeDoFilme')
    divName.appendChild(nomeDoFilme)
    card.appendChild(divName)

    return card
}


await preencherCardsFilme()