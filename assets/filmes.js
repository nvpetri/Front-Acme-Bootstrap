export async function getFilmes() {
    const url = 'http://localhost:8081/v2/acmefilmes/filmes'

    const response = await fetch(url)
    const filmes = await response.json()

    return filmes.filmes
}

// export async function getFilme(id) {
//     const idFilme = id

//     const url = `http://localhost:8081/v2/acmefilmes/filme/${idFilme}`

//     const response = await fetch(url)
//     const filme = await response.json()

//     return filme.filme[0]
// }