
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

app.listen(process.env.PORT || 2000, function() {
  console.log("Server started on port 2000");
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(cors());

// Handaling cors reror
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });
    
// mongodb://localhost:27017/wpcab_DB
// dotenv.config();
mongoose.connect("mongodb+srv://admin-ahmad:w2NtxE9-4uKc7Sp@wpcabdb.5p8qi.mongodb.net/wpcab_DB?retryWrites=true&w=majority");

const MemberSchema = new mongoose.Schema(
  {
    FullName : String,
    Gender : String,
    FatherName : String,
    HusbandName : String,
    MotherName : String,
    DOB : String,
    MaritalStatus : String,
    SpouseName : String,
    Inviter : String,
    BloodGroup : String,
    Occupation : String,
    PermanentAddressVillage : String,
    PermanentAddressSubdistrict : String,
    PermanentAddressDristrict : String,
    PermanentAddressPostOffice : String,
    PermanentAddressCountry : String,
    PermanentAddressNID : String,
    PresentAddress : String,
    Nationality : String,
    UserName : String,
    Password : String,
    Phone : String,
    Email : String,
    Role : String 
  },
  {timestamps:true}
);

const Member = new mongoose.model("Member", MemberSchema);

app.get("/", function(req,res){
    res.send("<h1>Welcome to WPCAB server!</h1>");
})

app.get("/users", function(req,res){
    Member.find({ PermanentAddressDristrict: "ঢাকা" },function(err,found){
      res.send(found);
    })
});

app.post("/users", function(req,res){
    var district = req.body.district;

    Member.find({PermanentAddressDristrict: district},function(err,found){
          res.send(found);
    })
});

app.post("/login", function(req,res){
  var username = req.body.field;
  var password = req.body.value;
  
  if(username==="wpcab.admin" && password==="admin@wpcab"){
    res.send(true);
  }
  else res.send(false);
});

app.post("/register", function(req,res){
  const d = new Date();
  const member = new Member(req.body);
  // console.log(member);
  member.save()
  .then(data => {
    res.send(true);
  })
  .catch(err => {
    res.send(false);
  });
});