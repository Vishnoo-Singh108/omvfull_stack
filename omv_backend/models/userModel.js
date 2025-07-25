import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ type : String, required: true},
    email:{ type : String, unique: true,required: true},
    password:{ type : String, required: true},
    verifyOtp:{ type : String, default:''},
    verifyOtpExpireAt :{ type : Date, default:0},
    isAccountVerified:{type:Boolean, default:false},


},{
    timestamps:true
});

const userModel = mongoose.model.user || mongoose.model('user', userSchema);

export default userModel;