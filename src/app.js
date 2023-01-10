import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, "erro"));
db.once("open", () => {
    console.log("conexão bem sucedida");
});

const app = express();

app.use(express.json());  



app.get('/', (req, res) => {
    res.status(200).send('curso de node');
})

app.get('/livro', (req, res) => {
    livros.find((err,livros) => {
        res.status(200).json(livros);
    })
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req,res) => {
    livros.push(req.body);
    res.status(201).send('livro adicionado com sucesso');
});

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`livro ${id} foi deletado`);
})

function findBooksById(id) {
    return livros.findIndex(livro => livro.id === id);
}


export default app