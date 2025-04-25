import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Professor from "./Professor.js";
import Instituicao from "./Instituicao.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json())

const connetDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Deu erro ao conectar com o MongoDB", error);
    }
};

connetDB();

//-----------------------
// CREATE PROFESSOR
app.post("/Professor", async (req, res) => {
    try {
        console.log('Dados recebidos:', req.body);
        const novoProfessor = await Professor.create(req.body);
        //res.json(novoUser);
        res.status(201).json(novoProfessor);
    } catch (error) {
        console.error('Erro ao cadastar Professor');
        //res.send(error);
        res.status(400).json({error: 'Erro ao cadastrar Professor', detalhes: error.message});
    }
});

// READ PROFESSOR
app.get("/Professor", async (req, res) => {
    try {
        const Prof = await Professor.find();
        res.json(Prof);
    } catch (error) {
        res.json({error: error});
    }
});

// UPDATE PROFESSOR
app.put("/Professor/:id", async (req, res) => {
    try {
        const novoProfessor = await Professor.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(novoProfessor);
    } catch (error) {
        res.json({error: error});
    }
});

// DELETE PROFESSOR
app.delete("/Professor/:id", async (req, res) => {
    try {
        const ProfExcluido = await Professor.findByIdAndDelete(req.params.id, req.body, {new: true});
        res.json(ProfExcluido);
    } catch (error) {
        res.json({error: error});
    }
});

//-----------------------
// CREATE INSTITUIÇÃO
app.post("/Instituicao", async (req, res) => {
    try {
        console.log('Dados recebidos:', req.body);
        const novoInstituicao = await Instituicao.create(req.body);
        //res.json(novoUser);
        res.status(201).json(novoInstituicao);
    } catch (error) {
        console.error('Erro ao cadastar Instituicao');
        //res.send(error);
        res.status(400).json({error: 'Erro ao cadastrar Instituicao', detalhes: error.message});
    }
});

// READ INSTITUIÇÃO
app.get("/Instituicao", async (req, res) => {
    try {
        const Inst = await Instituicao.find();
        res.json(Inst);
    } catch (error) {
        res.json({error: error});
    }
});

// UPDATE INSTITUIÇÃO
app.put("/Instituicao/:id", async (req, res) => {
    try {
        const novoInstituicao = await Instituicao.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(novoInstituicao);
    } catch (error) {
        res.json({error: error});
    }
});

// DELETE INSTITUIÇÃO
app.delete("/Instituicao/:id", async (req, res) => {
    try {
        const InstExcluido = await Instituicao.findByIdAndDelete(req.params.id, req.body, {new: true});
        res.json(InstExcluido);
    } catch (error) {
        res.json({error: error});
    }
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));