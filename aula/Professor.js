import mongoose from "mongoose";

const ProfessorCadastrados = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }, // caso deseje autenticar professores
    //disciplina: { type: String, required: true },
    tipo: { type: String, default: "Professor" },
    criadoEm: { type: Date, default: Date.now },
});

export default mongoose.model("Professor", ProfessorCadastrados);