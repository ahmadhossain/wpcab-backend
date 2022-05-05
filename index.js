
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");
  
app.listen(process.env.PORT || 2000, function() {
  console.log("Server started on port 2000");
});
// mongodb://localhost:27017/wpcab_DB
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const UserSchema = new mongoose.Schema({
    _id : String,
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
    PermanentAddress : String,
    PermanentAddressVillage : String,
    PermanentAddressHouse : String,
    PermanentAddressRoad : String,
    PermanentAddressSector : String,
    PermanentAddressBlock : String,
    PermanentAddressSubdistrict : String,
    PermanentAddressDristrict : String,
    PermanentAddressPostOffice : String,
    PermanentAddressPostalCode : String,
    PermanentAddressCountry : String,
    PermanentAddressNationality : String,
    PermanentAddressNID : String,
    PresentAddressVillage : String,
    PresentAddressHouse : String,
    PresentAddressRoad : String,
    PresentAddressSector : String,
    PresentAddressBlock : String,
    PresentAddressSubDistrict : String,
    PresentAddressDistrict : String,
    PresentAddressPostOffice : String,
    PresentAddressPostalCode : String,
    PresentAddressCountry : String,
    PresentAddressZone : String,
    Zone : String,
    SubDistrict : String,
    District : String,
    Country : String,
    Nationality : String,
    NID : String,
    UserName : String,
    Password : String,
    Phone : String,
    Email : String,
    Role : String
});

const User = new mongoose.model("Member", UserSchema);

app.get("/", function(req,res){
    res.send("<h1>Welcome to WPCAB server!</h1>");
})

app.get("/users", function(req,res){
    User.find({ PermanentAddressDristrict: "ঢাকা" },function(err,found){
      res.send(found);
    })
});


app.post("/users", function(req,res){
    var district = req.body.district;

    User.find({PermanentAddressDristrict: district},function(err,found){
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



