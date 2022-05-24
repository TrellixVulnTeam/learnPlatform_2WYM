const express = require('express');
const app = express();
const path = require('path');
const User = require('../models/User');
const cors = require('cors');

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images',express.static(path.join(__dirname, '../../frontend/images')));

app.use('/css',express.static(path.join(__dirname, '../../frontend/css')));

//direcionando para a pagina incial
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/view/index.html'))
}); 

//autenticando usuario no login
app.post("/login", async (req, res) => {
    let usuarioNome = req.body.nome;
    let usuarioSenha = req.body.password;
    const nomes = await User.findOne({ where: { nome: usuarioNome }});
    if (nomes === null) {
        console.log('Usuário não encontrado');
        res.redirect('/');
    } else {
        if (usuarioNome == nomes.nome && usuarioSenha == nomes.password) {
            res.sendFile(path.join(__dirname, '../../frontend/view/courses.html'));
        } else {
            console.log("Senha incorreta");
            res.redirect('/');
        }
    }
});


app.get("/logindo", async (req, res) => {
    const usuarios = await User.findAll();
    res.json(usuarios);
    console.log("hello");
});

//direcionando para pagina de cursos
app.post("/cadastrar", async (req, res) => {
    console.log(req.body);
    const nomes = await User.findOne({ where: { nome: req.body.nome }});
    if (nomes === null) {
        await User.create({
            nome: req.body.nome,
            password: req.body.password,
            email: req.body.email
        })
        .then(() => {
            console.log("Usuário cadastrado com sucesso");
            res.sendFile(path.join(__dirname, '../../frontend/view/courses.html'));
        }).catch((error) => {
            console.log(error);
            console.log("Usuário não cadastrado com sucesso");
            res.redirect('/cadastrarPagina');
        });    
    } else {
        console.log('Usuário já existente');
        res.redirect('/cadastrarPagina');
    }
});

//direcionar para pagina de cadastro
app.get('/cadastrarPagina', async(req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/view/cadastro.html'))
});

//direcionando para pagina account
app.get('/accountPage', async (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/view/account.html'))
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}: http://localhost:${port}`);
});