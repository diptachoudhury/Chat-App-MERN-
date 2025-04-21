import User from "../models/user.model";
import bcrypt from "bcryptjs";



export const signup = async (req, res) => {
const { fullName, email, password } = req.body;

try {
  if (password.length < 0) {
    return res.status(400).json({ message: "Password should be atleast 9 characters"})
  } 

  const user = await User.findOne({email});

  if (user) return res.status(400).json({message: "Email already exists"});

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password,salt);

  const newUser = new User({
    fullName: fullName,
    email: email,
    password: hashedPassword
  })

if (newUser) {
   //generate jwt token 


}else {
    return res.status(400).json({ message: 'Invalid User'});
}


} catch (error) {

}

}













export const login = (req, res) => {
    res.send("login route");
}
export const logout = (req, res) => {
    res.send("logout route");
}

