import conexao from "../config/conexao.js";

const Aeroporto = conexao.Schema ({
    nome:{
        type:String, 
        required: true},
    local:{
        type:String, 
        required:true},
    foto:{
        type:String, 
        required:false},

})

export default conexao.model("Aeroporto", Aeroporto)