function login() {
    let teste = {
        nome: document.getElementById('nome').value,
        senha: document.getElementById('password').value
    };
    // let usuarios = [];
    // let feedDisplay = document.getElementById('feed');
    fetch('http://localhost:3000/login')
        .then(response => response.json())
        .then(data => data.forEach(element => {
            // usuarios.push({
            //     nome: element.nome,
            //     senha: element.password
            // })
            if (teste.nome == element.nome && teste.senha == element.password) {
                console.log('usuario encontrado');
                document.location.href = '../view/courses.html';
            } else {
                console.log('usuario nao encontrado');
            }
        })
        )
    // console.log(usuarios)
}