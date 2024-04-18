const express = require('express')
const router = express.Router()


let listaPessoa = [
    {
        "id": 1,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    },
    {
        "id": 2,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    },
    {
        "id": 3,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    },
    {
        "id": 4,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    },
    {
        "id": 5,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    }
]

router.get('/pessoa', (req, res)=>{
res.json(listaPessoa)


})

router.get('/pessoa/:id', (req,res)=>{
const id = req.params.id
const pessoa = listaPessoa.find(pessoa => pessoa.id == id)

if(pessoa){
    return res.json(pessoa)
}

return res.status(404).json({mensagem:"Pessoa não encotrada!"})
})


router.post('/pessoa', (req,res)=>{
const dadosPessoa = req.body

if (!dadosPessoa.nome || !dadosPessoa.idade || !dadosPessoa.email || !dadosPessoa.telefone){
    return res.status(400).json({mensagem:"nome, idade, email, telefone são obrigatorios!"})
}


const novaPessoa = { 
    id : Math.round(Math.random() * 1000), 
    nome: dadosPessoa.nome,
    idade: dadosPessoa.idade,
    email: dadosPessoa.email,
    telefone: dadosPessoa.telefone

}

listaPessoa.push(novaPessoa)

res.status(201).json(
    {
        mensagem: "Produto criado com sucesso!",
        novaPessoa
    }
)
})




router.put('/pessoa/:id', (req,res)=>{
const id = req.params.id
const novosDado = req.body

if (!novosDado.nome || !novosDado.idade || !novosDado.email || !novosDado.telefone){
    return res.status(400).json({mensagem:"nome, idade, email, telefone são obrigatorios!"})
}

const index = listaPessoa.findIndex(pessoa => pessoa.id == id)

if (index == -1){
    return res.status(404).json({mensagem: "Pessoa não encontrada!"})
}

const pessoaAtualizada = {
    id : Number(id), 
    nome: novosDado.nome,
    idade: novosDado.idade,
    email: novosDado.email,
    telefone: novosDado.telefone
}    

listaPessoa[index] = pessoaAtualizada



res.json({
mensagem: "Pessoa alterado com sucesso!",
pessoaAtualizada

})

})


router.delete('/pessoa/:id',(req,res)=>{
    const id = req.params.id
    const index = listaPessoa.findIndex(pessoa=> pessoa.id == id)

    if(index == -1){
return res.status(404).json({mensagem: "pessoa não encontrada!"})

    }
    listaPessoa.splice(index,1)

    res.json({mensagem: "PESSOA ALTUALIZADA COM SUCESSO!"})
})



module.exports = router