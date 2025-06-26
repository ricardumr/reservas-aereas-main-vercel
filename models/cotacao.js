import conexao from "../config/conexao.js";

const Cotacao = conexao.Schema({
    origem:{
        type:conexao.Types.ObjectId,ref:"Aeroporto", 
        required: false
    },
    destino:{
        type:conexao.Types.ObjectId,ref:"Aeroporto", 
        required: false
    },
    ida:{
        type:String, 
        required:true
    },
    volta:{
        type:String, 
        required:true
    },
    usuario:{
        type:conexao.Types.ObjectId,ref:"Usuario", 
        required: false
    },
    contato:{
        type:String, 
        required:true
    },
    status:{
        type:String, 
        required:true
    },

})

export default conexao.model("Cotacao", Cotacao)