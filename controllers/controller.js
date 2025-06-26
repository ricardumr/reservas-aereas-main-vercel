import Aeroporto from '../models/aeroporto.js';
import Companhia from '../models/companhia.js';
import Usuario from '../models/usuario.js';
import Cotacao from '../models/cotacao.js';

 

export async function home(req,res){
    
    res.render('admin/index')
}

//aeroportooo


export async function abreaddaeroporto(req, res) {
    res.render('admin/aeroporto/add')
}
export async function addaeroporto(req, res) {
    
    var fotoupload;
    if(req.file!=null){
        fotoupload=req.file.filename
    }
    else{
        fotoupload=null
    }

    await Aeroporto.create({
        nome:req.body.nome,
        local:req.body.local,
        foto:fotoupload
        
})
    
    res.redirect('/admin/aeroporto/add')
}
export async function listaraeroporto(req, res) {

    const resultado = await Aeroporto.find({}).catch(function(err){console.log(err)})

    res.render('admin/aeroporto/lst', {Aeroportos:resultado});
}

export async function filtraraeroporto(req, res) {
    const resposta = await Aeroporto.find({nome:new RegExp(req.body.pesquisar,"i")})
    res.render('admin/aeroporto/lst',{Aeroportos:resposta});
}

export async function deletaaeroporto(req, res) {
   await Aeroporto.findByIdAndDelete(req.params.id)
    res.redirect('/admin/aeroporto/lst')
}
export async function abreedtaeroporto(req, res){
    const resultado = await Aeroporto.findById(req.params.id)    
    res.render('admin/aeroporto/edt',{Aeroporto:resultado})
}


export async function edtaeroporto(req, res){
    
    var salvefoto;
    
    if(req.file==fotoupload){
        salvefoto = fotoupload
    }
    else{
        salvefoto=null;
    }

    var fotoupload;
    if(req.file!=null){
        fotoupload=req.file.filename
    }

    else{
        fotoupload=salvefoto
    }

    await Companhia.findByIdAndUpdate(req.params.id, 
        {nome:req.body.nome,
            pais:req.body.pais,
            foto:fotoupload
        }
    )
    
    await Aeroporto.findByIdAndUpdate(req.params.id,
    {nome:req.body.nome,
        pais:req.body.pais,
        foto:fotoupload
    }
)
    res.redirect('/admin/aeroporto/lst')
}
 
//usuario

export async function abreaddusuario(req, res) {
    res.render('admin/usuario/add')
}
export async function addusuario(req, res) {

    
    await Usuario.create({
        nome:req.body.nome,
        email:req.body.email,
        cpf:req.body.cpf,
        telefone:req.body.telefone
})
    
    res.redirect('/admin/usuario/add')
}
export async function listarusuario(req, res) {
    
    const resultado = await Usuario.find({}).catch(function(err){console.log(err)})

    res.render('admin/usuario/lst', {Usuarios:resultado});
    

    
}

export async function filtrarusuario(req, res) {
    const resposta = await Usuario.find({nome:new RegExp(req.body.pesquisar,"i")})
    res.render('admin/usuario/lst',{Usuarios:resposta});
}

export async function deletausuario(req, res) {
      await Usuario.findByIdAndDelete(req.params.id)
    res.redirect('/admin/usuario/lst')
}
export async function abreedtusuario(req, res){
    const resultado = await Usuario.findById(req.params.id)    
    res.render('admin/usuario/edt',{Usuario:resultado})
}

export async function edtusuario(req, res){
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/usuario/lst')
}

 
//companhia

export async function abreaddcompanhia(req, res) {
    res.render('admin/companhia/add')
}
export async function addcompanhia(req, res) {
    
    var fotoupload;
    if(req.file!=null){
        fotoupload=req.file.filename
    }
    else{
        fotoupload=null
    }
    
    await Companhia.create({
        nome:req.body.nome,
        pais:req.body.pais,
        foto:fotoupload
        
})
    
    res.redirect('/admin/companhia/add')
}
export async function listarcompanhia(req, res) {

    const resultado = await Companhia.find({}).catch(function(err){console.log(err)})

    res.render('admin/companhia/lst', {Companhias:resultado});
}

export async function filtrarcompanhia(req, res) {
    const resposta = await Companhia.find({nome:new RegExp(req.body.pesquisar,"i")})
    res.render('admin/companhia/lst',{Companhias:resposta});
}

export async function deletacompanhia(req, res) {
    await Companhia.findByIdAndDelete(req.params.id)
    res.redirect('/admin/companhia/lst')
}
export async function abreedtcompanhia(req, res){
    const resultado = await Companhia.findById(req.params.id)    
    res.render('admin/companhia/edt',{Companhia:resultado})
}
export async function edtcompanhia(req, res){
    
    var salvefoto;
    
    if(req.file==fotoupload){
        salvefoto = fotoupload
    }
    else{
        salvefoto=null;
    }

    var fotoupload;
    if(req.file!=null){
        fotoupload=req.file.filename
    }

    else{
        fotoupload=salvefoto
    }
    await Companhia.findByIdAndUpdate(req.params.id, 
        {nome:req.body.nome,
            pais:req.body.pais,
            foto:fotoupload
        }
    )
    res.redirect('/admin/companhia/lst')
}


//cotacao

export async function abreaddcotacao(req, res) {
    const resultado = await Aeroporto.find({}).catch(function(err){console.log(err)});
    const resposta = await Usuario.find({}).catch(function(err){console.log(err)})
    res.render('admin/cotacao/add',{Aeroportos:resultado, Usuarios:resposta})
}


export async function addcotacao(req, res) {
    
    var cOrigem=null;
    if(req.body.origem!=null){
        cOrigem=await Aeroporto.findById(req.body.origem)
    }

    var cDestino=null;
    if(req.body.destino!=null){
        cDestino=await Aeroporto.findById(req.body.destino)
    }

    var cUsuario=null;
    if(req.body.usuario!=null){
        cUsuario=await Usuario.findById(req.body.usuario)
    }
    console.log(cUsuario.nome)
    await Cotacao.create({
        origem:cOrigem,
        destino:cDestino,
        ida:req.body.ida,
        volta:req.body.volta,
        usuario:cUsuario,
        contato:req.body.contato,
        status:req.body.status,
        
})
    
    res.redirect('/admin/cotacao/add')
}
export async function listarcotacao(req, res) {

    const resultado = await Cotacao.find({}).populate('origem destino usuario').catch(function(err){console.log(err)})

    res.render('admin/cotacao/lst', {Cotacoes:resultado});
}

export async function deletacotacao(req, res) {
    await Cotacao.findByIdAndDelete(req.params.id)
    res.redirect('/admin/cotacao/lst')
}
export async function abreedtcotacao(req, res){
    const resultado = await Cotacao.findById(req.params.id) 
    const cAeroporto= await Aeroporto.find({}).catch(function(err){console.log(err)}) 
    const cUsuario= await Usuario.find({}).catch(function(err){console.log(err)})    
    res.render('admin/cotacao/edt',{Cotacao:resultado, Aeroportos:cAeroporto, Usuarios:cUsuario})
}
export async function edtcotacao(req, res){
    await Cotacao.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/cotacao/lst')
} 

export async function filtrarcotacao(req, res) {
    const resposta = await Cotacao.find({nome:new RegExp(req.body.pesquisar,"i")})
    res.render('admin/cotacao/lst',{Cotacoes:resposta});
}

 