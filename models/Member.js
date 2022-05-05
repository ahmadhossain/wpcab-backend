const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Member", MemberSchema);