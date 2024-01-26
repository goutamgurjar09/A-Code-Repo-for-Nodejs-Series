
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose .Schema({//Schema always ek object accept krta hai
   //username -> (Passport-local-mongoose) ->means hme username and password likhne ki need nhi hai bcz inhe P-L-M handle kr lega -> and  ye dono unique hote hai and ye directly store nhi hote DB me ->
   //password ->(P-L-M)
   email:{         //isko add kr skte hai
    type:String,
    trim:true,
    required:true,
   },
   gender:{        
    type:String,
    trim:true,
    required:true,
   }
  })

  userSchema.plugin(passportLocalMongoose);

  let User = mongoose.model('User',userSchema) //(modelName,schema)      
  
  module.exports = User;

  //Note:-Ab hmare pass ek user ka schema hoga uske ander username ,email,password...etc hoga to hm password and username ko directly DB me store nhi kr skte bcz usko unique rkhna hai  or ye sb kaam -> Passport-local-mongoose  krta hai isliye hm isko schema ke ander nhi likhte

  //So hm Authentication  ke liye Passport ka use krege and iske ander hm konse stretegy ka use krege Passport-local ka   and sara kaam  like hashing + salt  ko krne ke liye -> Passport-local-mongoose ka use krege

  //to iske liye means username and password  ke liye hm in tools ka use krte hai bcz ye apne aap chack kr lenge ki username unique hona chahiye  ->iske liye hm Passport-local ka use krte hai  -> see->https://www.passportjs.org/packages/passport-local/
  //and password ke liye hm -> Passport-local-mongoose ka use krte hai
  //isliye hm in dono ko user schema me nhi dalege bcz behined the scene ye automatically chack ho jati hai in tools ki help se

  //Note: Passport-local-mongoose ka kaam hai jb hm signup krte hai login se phle tb ye username and password ko encrypt krke (like hashing+salt form ko  ) krke store krega means hashing dalega,salt dalega uniqueness provide krne ke liye password/username ko
  //-> npm install passport-local-mongoose
