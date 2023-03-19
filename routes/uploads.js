/*

    ruta: api/uploads/

*/

const { Router } = require('express');
const expressfileUpload = require('express-fileupload');

const { fileUpload } = require('../controllers/uploads');
const { validarJWT } = require('../midddlewares/validar-jwt')


const router = Router();

app.use(expressfileUpload());

router.put( '/:tipo/:id', validarJWT, fileUpload );


module.exports = router;