function logar() {
    const user = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
    }
    fetch('http://localhost:3000/usuarios/login', {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(data => data.json())
        .then(result => localStorage.setItem('userToken', result.token))
        // .then(_ => console.log(localStorage.getItem('userToken')))
        .then(_ => {
            const decodedToken = decodeToken()
            if (decodedToken) {
                console.log(decodedToken)
                alert('entrou')
                window.location.href = './home.html'
            } else {
                alert('nao entrou')
            }
        })
}

function decodeToken() {
    let decodedToken = jwt_decode(localStorage.getItem('userToken'))
    return decodedToken
}