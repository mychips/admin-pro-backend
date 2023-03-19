/* 
    medicos
    '/api/medicos'
*/


/*
    hospitales
    ruta: '/api/hospitales'

*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../midddlewares/validar-campos');

const { validarJWT } = require('../midddlewares/validar-jwt');

const {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
} = require('../controllers/medicos');

const router = Router();

router.get( '/', getMedicos );

router.post( '/',
    [
        validarJWT,
        check('nombre', 'El nombre del medico es necesario').not().isEmpty(),
        check('nombre', 'El hospital id debe de ser valido').isMongoId(),
        validarCampos
    ],
    crearMedico
);

router.put( '/:id', 
    [
       
    ],
    actualizarMedico
);


router.delete( '/:id', 
    borrarMedico 
);

module.exports = router;