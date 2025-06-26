import conexao from "../config/conexao.js";

const Companhia = conexao.Schema({
    nome:{
        type:String, 
        required: true},
    pais:{
        type:String, 
        required:true},
    foto:{
        type:String, 
        required:true
    },

})

export default conexao.model("Companhia", Companhia)