function validar(event) {
    event.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username === 'admin' && password === 'admin') {
        alert('login efetuado com sucesso!')
    }
    else{
        document.getElementById('mensagemErro').style.display = 'block'
    }
}