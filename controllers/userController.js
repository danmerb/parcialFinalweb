const User = require('../models/User');

const userController = {};

//mostrar todos los registros de Lentes de camaras

userController.index = async function (req, res, next) {
    try{
        let users = await User.find()
        return res.status(200).json(users);
    }
    catch(err){
        return next(res);
    }
}

//obtener información de un documento de la colección Lentes de camaras, buscando por id

userController.findUser = async function (req, res, next) {
    let { id } = req.params;
    try {
        let user = await User.findById(id)
        return res.status(200).json(user);
    }
    catch (err) {
        return next(res);
    }


}






userController.store = async function (req, res, next) {
    let user = new User({});
    user.materia = req.body.materia;
    user.uv = req.body.uv;
    user.descripcion = req.body.descripcion;

    try {
        await user.save();
        return res.status(200).json({ message: "succes", user: user });
    }
    catch (err) {
        return res.status(500).json({ err: err, message: "fallo" })
    }
}

userController.delete = async function (req, res, nex) {

    try {
        await User.remove({ _id: id })
        return res.status(200).json({ message: "eliminado correctamente" });
    }
    catch (err) {
        return next(res);
    }

}



module.exports = userController;
