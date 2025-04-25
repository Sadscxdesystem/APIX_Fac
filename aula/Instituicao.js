import mongoose from "mongoose";

const InstituicaoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  materias: [{ type: String, required: true }],
  idProfessor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professor",
    required: true,
  },
  criadoEm: { type: Date, default: Date.now },
});

export default mongoose.model("Instituicao", InstituicaoSchema);
