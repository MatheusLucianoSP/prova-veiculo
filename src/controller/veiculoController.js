import {Router} from "express";
import { listarVeiculo, inserir } from "../repository/veiculoRepository.js";

let endpoints = Router();

endpoints.get('/veiculo/listar' , async (req, resp) => {
    let dados = await listarVeiculo();
    resp.send(dados);
})


endpoints.post('/veiculo' , async (req, resp) =>{
    let veiculo
})