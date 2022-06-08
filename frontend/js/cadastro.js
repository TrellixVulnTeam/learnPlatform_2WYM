function cadastrar() {
    fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value
        })
    }).then(res => {
        return res.json()
    })
}