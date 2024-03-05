import { getFilmes, getFilme } from "./filmes.js"

function criarCards(filme) {
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    const valor = document.createElement('button')
    valor.textContent = filme.valor_unitario

    card.appendChild(titulo)
    card.appendChild(valor)

    return card
}

async function preencherCards() {

    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCards(filme)
        container.appendChild(card)
    })
}

preencherCards()

console.table(await getFilme(2))