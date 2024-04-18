import express from "express";
import connection from "./dbConnection.js"
import bodyParser from "body-parser";

const app = express();
const Porta = 3333
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/produto', async (req, res)=>{
    const ReqProduto = {
        nome: req.body.nome,
        valor: req.body.valor
    }
    connection.query(`INSERT INTO PRODUTO VALUES(NULL,'${ReqProduto.nome}',${ReqProduto.valor})`, (err, results)=>{
        if(err){
            res.send(err)
        }else{
            res.send(`requisição bem sucedida! ${results}`)
        }
    })

})
app.get('/', (req,res)=>{
    const query = 'SELECT * FROM PRODUTO'
    connection.query(query, (err, results)=>{
        if(err){
            res.send(err);
        }else{res.json(results)}
    })
})
app.listen(Porta, ()=>{console.log(`servidor rodando na Porta:${Porta}`)})