
function carregar() {
    let feedDisplay = document.getElementById('feed');
    fetch('http://localhost:3000/logindo')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const nome = `<h3>` + user.nome + `</h3>`
                feedDisplay.insertAdjacentHTML("beforeend", nome)
            })
        })
        .catch(err => console.log(err))
}