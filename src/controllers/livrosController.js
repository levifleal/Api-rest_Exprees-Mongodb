import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req,res) => {
        livros.find((err,livros) => {
            res.status(200).json(livros)
        });
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err,livros) => {
            if (err){
                res.status(400).send({message: `${err.message} - id do livro nao encontrado`});
            }else{
                res.status(200).send(livros);
            }
        })

    }

    static cadastrarLivros = (req,res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err} - falha ao cadastrar o livro`});
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static excluirLivro = (req, res) =>{
        let id = req.params.id;

        livros.findByIdAndDelete(id,(err) => {
            if(!err){
                res.status(200).send('livro removido com sucesso')
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: "livro atualizado com sucesso"});
            }else{
                res.status(500).send({message:err.message});
            }

        })

    }

}

export default LivroController