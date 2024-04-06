'use strict'

const mail = document.getElementById('user-mail')
const pass = document.getElementById('user-pass')
const button = document.getElementById('btn-login')

function validarUsuario() {
    if (mail.value == 'nicolas' && pass.value == '1234') {
        window.location.href = './pages/home.html'
    }
}

button.addEventListener('click', validarUsuario)

// async function obterDados() {
//     const url = 'http://127.0.0.1:8080/usuarios'
//     try {
//         const response = await fetch(url)
//         const usuarios = await response.json()
//         return usuarios
//     } catch (error) {}
// }

// function fazerLogin() {

//     obterDados().then(usuarios => {

//         let emailInput = document.getElementById('user-mail').value.trim()
//         let senhaInput = document.getElementById('user-pass').value

//         let usuarioEncontrado = usuarios.find(function(usuario) {
//             return usuario.email.trim() === emailInput && usuario.senha === senhaInput
//         })

//         if (usuarioEncontrado) {
//             window.location.href = '/html/pgHome.html'
//         } else {
//             alert('Usuário ou senha incorretos. Tente novamente.')
//         }
//     })
// }

// buttonLogin.addEventListener('click', fazerLogin)