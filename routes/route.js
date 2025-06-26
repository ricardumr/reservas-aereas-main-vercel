
import multer from 'multer';
var storage = multer.diskStorage({
    filename: function(req, file, cb){
    let nome = Date.now() + "-" + file.originalname
    cb(null, nome)
    },
    destination: function(req, file, cb){
    let path = "./public/arquivos"
    cb(null, path)
    }
    })
    var upload = multer({ storage })


import express from 'express';
const router = express.Router();

import {
    home,
    abreedtaeroporto,
    abreaddaeroporto,
    edtaeroporto,
    addaeroporto,
    listaraeroporto,
    filtraraeroporto,
    deletaaeroporto,
    abreedtusuario,
    abreaddusuario,
    edtusuario,
    addusuario,
    listarusuario,
    filtrarusuario,
    deletausuario,
    abreedtcompanhia,
    abreaddcompanhia,
    edtcompanhia,
    addcompanhia,
    listarcompanhia,
    filtrarcompanhia,
    deletacompanhia,
    abreedtcotacao,
    abreaddcotacao,
    edtcotacao,
    addcotacao,
    listarcotacao,
    filtrarcotacao,
    deletacotacao,


} from '../controllers/controller.js'
router.get('/', home)
//cotacao
//create do modelo cotacao (create)
router.get('/admin/cotacao/add', abreaddcotacao)
router.post('/admin/cotacao/add', addcotacao)
//rotas do modelo cotacao (read)
router.get('/admin/cotacao/lst', listarcotacao)
router.post('/admin/cotacao/lst', filtrarcotacao)
//rota do modelo cotacao (delete)
router.get('/admin/cotacao/del/:id', deletacotacao)
//rota do modelo cotacao (editar)
router.get('/admin/cotacao/edt/:id', abreedtcotacao)
router.post('/admin/cotacao/edt/:id', edtcotacao)

//aeroporto
router.get('/admin/aeroporto/add', abreaddaeroporto)
router.post('/admin/aeroporto/add', upload.single('foto'), addaeroporto)

router.get('/admin/aeroporto/lst', listaraeroporto)
router.post('/admin/aeroporto/lst', filtraraeroporto)

router.get('/admin/aeroporto/del/:id', deletaaeroporto)

router.get('/admin/aeroporto/edt/:id', abreedtaeroporto)
router.post('/admin/aeroporto/edt/:id', upload.single('foto'), edtaeroporto)

//usuario

router.get('/admin/usuario/add', abreaddusuario)
router.post('/admin/usuario/add', addusuario)

router.get('/admin/usuario/lst', listarusuario)
router.post('/admin/usuario/lst', filtrarusuario)

router.get('/admin/usuario/del/:id', deletausuario)

router.get('/admin/usuario/edt/:id', abreedtusuario)
router.post('/admin/usuario/edt/:id', edtusuario)

//companhia

router.get('/admin/companhia/add', abreaddcompanhia)
router.post('/admin/companhia/add',upload.single('foto'), addcompanhia)

router.get('/admin/companhia/lst', listarcompanhia)
router.post('/admin/companhia/lst', filtrarcompanhia)

router.get('/admin/companhia/del/:id', deletacompanhia)

router.get('/admin/companhia/edt/:id', abreedtcompanhia)
router.post('/admin/companhia/edt/:id', upload.single('foto'), edtcompanhia)





export default router