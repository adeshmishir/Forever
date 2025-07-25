import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const createToken  = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user login 
const loginUser = async(req,res)=>{
  try {
    const {email,password} = req.body;
    const user  = await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"User does not Exist"});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(isMatch){
      const token = createToken(user._id);
      res.json({success:true,token});
    }
    else{
        res.json({success:false,message:"Invalid Credentials"});
    }
    
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message});
    
  }



}


// Route for user register
const registerUser = async(req,res)=>{
 try {
    const {name,email,password,cartData} = req.body;
    // checking user Already exist or not
   const exist = await userModel.findOne({email});
   if(exist){
    return res.json({success:false,message:"User already Exist"});
   }
   
   // validationg email format and strong password
   if(!validator.isEmail(email)){
    return res.json({success:false,message:"Enter Valid Email"});
   }
   if(password.length<6){
    return res.json({success:false,message:"Please Enter a Strong Password"});
   }
//hashing User password

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);

const newUser = new userModel({
    name,
    email,
    password:hashedPassword,
    cartData:cartData||{}
   
})
const user = await newUser.save();
const token = createToken(user._id);
res.json({success:true,token})
    
 } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message});
    
 }
}

// Route for Admin login 
const adminLogin =  async(req,res)=>{
try {
  const {email,password} = req.body;
  if(email==process.env.ADMIN_EMAIL&&password === process.env.ADMIN_PASSWORD){
    const token = jwt.sign(email+password,process.env.JWT_SECRET);
    res.json({
      success:true,
      token
    })
  }
  else{
    res.json({
      success:false,
      message:"INVALID CREDENTIALS"
    })
  }
  

} catch (error) {
  console.log(error);
  res.json({success:false,message:error.message});
}

}
export {loginUser,registerUser,adminLogin}