const express = require('express')
const app = express()

// middlewares
app.use(express.json())


const pessoaRouter  =require("./route/pessoa")
app.use(pessoaRouter) 





app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})
