const User=require('../models/User');

const userController={};

//mostrar todos los registros de Lentes de camaras

userController.index=async function(req,res,next) {
    let users = await User.find();
    return res.status(200).json(users);
}

//obtener información de un documento de la colección Lentes de camaras, buscando por id

userController.findUser=async function(req,res,next){
    let{id}=req.params;
    let user= await User.findById(id) .catch(err =>{
        return next(res);
    });
    return res.status(200).jason(user);
    
}

userController.store=async function(req,res,next){
    let user=new User({});
    user.materia=req

    
}

module.exports=userController;
