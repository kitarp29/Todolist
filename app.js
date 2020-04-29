const express = require("express");
const bodyParser = require("body-parser");

const app=express();
var ans=["Eat😋","Sleep😴","Code💻","Repeat♻"];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
let today= new Date();

let options={
  weekday:"long",
  day:"numeric",
  month:"long"
};
let day=today.toLocaleDateString("hi-IN",options);

res.render("list",{pk:day,lily:ans});
});

app.post("/",function(req,res){
let anws = req.body.lily;
ans.push(anws);
res.redirect("/");
  // console.log(ans);
});

app.listen(process.env.PORT || 3000,function(){
  console.log("I'm running BITCH!!");
});
