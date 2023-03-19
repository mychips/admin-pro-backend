

const fileUpload = ( req, res = response ) => {

    const tipo = req.params.tipo;
    const id   = req.params.id;

    // Validar tipo
    const tiporValidos = ['hospitales', 'medicos', 'usuarios'];
    if ( !tiporValidos.includes(tipo) ){
        return res.status(400).json({
            ok: false,
            msg: 'No es un medico, usuario u hospital'
        });
    }


    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No hay ningun archivo'
        });
      }

    res.json({
        ok: true,
        msg: 'fileUpload'
    });
}


module.exports = {
    fileUpload
}