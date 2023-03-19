/*

    ruta: api/todo/:busqueda

*/

const { Router } = require('express');
const { validarJWT } = require('../midddlewares/validar-jwt')

const {
    getTodo, getDocumentosColeccion
} = require('../controllers/busquedas');

const router = Router();

router.get( '/:busqueda', validarJWT, getTodo );

router.get('/coleccion/:tabla/:busqueda', validarJWT, getTodo, getDocumentosColeccion);


module.exports = router;