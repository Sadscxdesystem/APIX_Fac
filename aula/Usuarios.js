import mongoose from "mongoose";

const UsuariosCadastrados = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});

export default mongoose.model("Usuario", UsuariosCadastrados);