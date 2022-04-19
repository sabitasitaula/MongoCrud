import UserModel from "../model/User.js";

export const userAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    }
    catch (error) {
        res.json({ message: error });
    }
};

export const userDetails = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.json(user);
    }
    catch (error) {
        res.json({ message: error });
    }
};

export const userCreate = async (req, res) => {
    
    const userModel = new UserModel({
        name: req.body.name,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        address: req.body.address
    });
    try {
        const savedUser = await userModel.save();
        res.send(savedUser);
    }
    catch (error) {
        res.json( error);
    }
   
};

export const userUpdate = async (req, res) => {
    try {
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id ,
            {
            name: req.body.name,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            address: req.body.address,
            
        },{new:true}
        );
        res.send(updateUser);
    }
    catch (error) {
        res.json({ message: error });
    }
};

export const userDelete = async (req, res) => {
    try {
        const _id = req.params.id;
        const removeUser = await UserModel.findByIdAndDelete(_id);
        res.send(removeUser);
    }
    catch (error) {
        res.json({ message: error });
    }
};