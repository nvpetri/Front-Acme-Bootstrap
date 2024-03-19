'use strict'

const buttonLogin = document.getElementById('btn-login')

async function obterDados() {
    const url = 'http://127.0.0.1:8080/usuarios'
    try {
        const response = await fetch(url)
        const usuarios = await response.json()
        return usuarios
    } catch (error) {}
}

function fazerLogin() {

    obterDados().then(usuarios => {

        var emailInput = document.getElementById('user-mail').value.trim()
        var senhaInput = document.getElementById('user-pass').value

        var usuarioEncontrado = usuarios.find(function(usuario) {
            return usuario.email.trim() === emailInput && usuario.senha === senhaInput
        })

        if (usuarioEncontrado) {
            sessionStorage.setItem('userId', usuarioEncontrado.id)
            sessionStorage.setItem('isPremium', usuarioEncontrado.premium)
            window.location.href = '/html/pgHome.html'
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.')
        }
    })
}



buttonLogin.addEventListener('click', fazerLogin)