const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ //Schema:데이터의 설계도(내가 받을 데이터)
   name : {
      type: String,
      required: [true, "User must type name"],
      unique: true,
   },
   token: {  //연결 id 정보 저장을 위한 토큰
      type: String,
   },
   online: {
      type: Boolean,
      default: false,
   },
});
module.exports = mongoose.model("User", userSchema);