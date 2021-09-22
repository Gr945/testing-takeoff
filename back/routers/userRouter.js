const express = require("express");
const User = require("../bd/userShema");
const COOKIE_NAME ='testingCookie'
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
  })
 //регистрация нового пользователя
  .post(async (req, res) => {
    const { name, password } = req.body;
    if(name && password){
     const newUser = await User.create({name, password})
      res.status(200).json(newUser);
    } else {
      res.status(400).json({ createUser: false });
    }
  })

  // .delete(async (req,res) => {
    
  //   const {id} = req.body
  //   const delUser = await User.findByIdAndDelete(id)
  //     res.status(200).json(delUser)
    
  // })

  router.route('/login')
  .post(async (req, res) => {
    const { login, password } = req.body;
    console.log(login,password)
    if (login && password) {
      const loginUser = await User.findOne({ login, password });
      if (loginUser) {
        res.status(200).json(loginUser);
      } else {
        res.status(200).json({ userInBase: false });
      }
    } else {
      res.status(400).json({ loginUser: false });
    }
  });

  // router.route('/logout').get(async (req, res) => {
  //   // await req.session.destroy(); // удаляем сессию

  //   if (req.cookies[COOKIE_NAME]) {
  //     res.clearCookie(COOKIE_NAME); // удаляем куки
  //     res.sendStatus(200);
  //   }
  // });

module.exports = router;
