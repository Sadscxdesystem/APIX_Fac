import mongoose from "mongoose";

const UsuariosCadastrados = new mongoose.Schema({
    nome: Number,
    email: Number,
    senha: Number
});

export default mongoose.model("Usuario", UsuariosCadastrados);