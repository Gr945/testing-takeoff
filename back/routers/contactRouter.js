const express = require("express");
const User = require("../bd/userShema");
const Contact = require("../bd/contactShema");
const router = express.Router();

router
  .route("/")
  .post(async (req, res) => {
    const contacts = await Contact.find();
    const userContacts = contacts.filter((el) => el.avtorID == req.body.id);
    res.status(200).json(userContacts);
  })

 

 

router.route("/new")
.post(async (req, res) => {
  const { name, phone, id } = req.body;

  const user = await User.findOne({ _id: id });

  const newContact = await Contact.create({ name, phone, avtorID: id });

  user.contacts.push(newContact._id);
  await user.save();

  if (newContact) {
    res.status(200).json(newContact);
  } else {
    res.status(400).json({ createContact: false });
  }
})
.delete(async (req, res) => {
  const {contId,userId} = req.body;
  const delCont = await Contact.findByIdAndDelete({_id:contId});
  const user = await User.findOne({_id: userId });
  user.contacts = user.contacts.filter(el => el !== delCont._id)
  await user.save()
  res.status(200).json(delCont);
})
.put(async (req, res) => {
  const {newName,newPhone,contId} = req.body;
  const contact = await Contact.findById(contId);
  contact.name = newName
  contact.phone = newPhone
  await contact.save()
  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(400).json({ renameContacts: false });
  }
});

module.exports = router;
