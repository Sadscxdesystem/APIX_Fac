import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Usuarios from "./Usuarios.js";

dotenv.config();

const app = express();
const PORT = 3000;

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

// CREATE
app.post("/Usuario", async (req, res) => {
    try {
        const novoUser = await Usuarios.create(req.body);
        res.json(novoUser);
    } catch (error) {
        res.send(error);
    }
});

// READ
app.get("/Usuario", async (req, res) => {
    try {
        const User = await Usuarios.find();
        res.json(User);
    } catch (error) {
        res.json({error: error});
    }
});

// UPDATE
app.put("/Usuario/:id", async (req, res) => {
    try {
        const novoUsuario = await Usuarios.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(novoUsuario);
    } catch (error) {
        res.json({error: error});
    }
});

// DELETE
app.delete("/Usuario/:id", async (req, res) => {
    try {
        const UserExcluido = await Usuarios.findByIdAndDelete(req.params.id, req.body, {new: true});
        res.json(UserExcluido);
    } catch (error) {
        res.json({error: error});
    }
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));