const { Router } = require("express");
const registerModel = require("../models/registerModel");
const router = Router();
const { createHmac } = require("crypto");
const enrollModel = require("../models/enrollCourses");

router.post("/progressreport/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        
        const account = await enrollModel.findOne({ email });
        if (account) {
            const account1 = account.courses.find((data)=>data.id===Number(id));
            if(account1)return account1.progress
            else return null
        } else {
            // Handle case where account with specified email is not found
            return {msg:"error"}
        }
    } catch (error) {
       return  res.json({ msg: error }); 
    }
});

router.post("/progress/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const { tutorialValues, email } = req.body;
  
  
  try {
    const result = await enrollModel.findOneAndUpdate(
    { 'courses.id': Number(id) },
    { $set: { 'courses.$.progress': tutorialValues } },
    { new: true }
  );

  if (result) {
   res.json({msg:"saved successfully"})
  } else {
    res.json({msg:"Issue in saving data"})
  }
  } catch (error) {
    res.json({ msg: error });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await registerModel.create({ name, email, password });
    return res.json({ msg: "Registered Successfully" });
  } catch (error) {
    if (error.code === 11000)
      return res.status(400).json({ msg: "User Already Exists" });
    return res.status(500).json({ msg: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await registerModel.findOne({ email });
    if (!user) return res.status(401).json({ msg: "Invalid email" });
    const userPassword = user.password;
    const salt = user.salt;
    const hashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    if (hashPassword != userPassword)
      return res.status(401).json({ msg: "Invalid password" });
    console.log(user);
    return res.status(200).json({ msg: "Loggined succesfully", data: user });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});
router.put("/like", (req, res) => {});
module.exports = router;
