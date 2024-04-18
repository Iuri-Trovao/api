import express, { json } from "express"
import mysql from "mysql";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api',
    port: '3306'
})
connection.connect((err)=>{
    if(err){
        console.error(`Erro ao conectar ao mysql ${err}`);
    }else{console.log('conexão bem sucedida!!!')}
})

export default connection;

