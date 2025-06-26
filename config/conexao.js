import mongoose from "mongoose";

const url = "mongodb+srv://aluno:aluno@cluster0.zuo1w.mongodb.net/NOME_DO_BANCO?retryWrites=true&w=majority";

async function conectarDB() {
    try {
        await mongoose.connect(url);
        console.log("Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

conectarDB();

export default mongoose;
