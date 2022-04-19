import mongoose from 'mongoose';

const UserModel = mongoose.model('User', 
    mongoose.Schema(
        {
            name: {
                type: String,
                required: true,
                trim:true
            },
            email: {
                type: String,
                required: true,
                trim:true
            },
            contactNumber: {
                type: String,
                required: true,
                trim:true
            },
            address: {
                type: String,
                required: true,
                trim:true
            }
        },
        {timestamps: true}
    )
);

export default UserModel;