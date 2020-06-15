const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app=express();
var ans=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://Pratik:Pratik2902@cluster0-io8ki.mongodb.net/todolistDB?retryWrites=true&w=majority/todolistDB",{ useUnifiedTopology: true ,useNewUrlParser: true});

const item ={
  name:{
    type:String,
    required:[true]
  }
};

const Item = mongoose.model("Item",item);

const item1= new Item({
  name:"Eat😋"
});
const item2= new Item({
  name:"Sleep😴"
});

const item3= new Item({
  name:"Code💻"
});
const item4= new Item({
  name:"Repeat♻"
});


const defaultitems =[item1,item2,item3,item4];

// Item.insertMany(defaultitems,function(err){
//   if(err)
//   {
//     console.log(err);
//   }
//   else{
//     console.log("yipeeee!!! DB bnn gya h");
//   }
// });



app.get("/",function(req,res){
let today= new Date();

let options={
  weekday:"long",
  day:"numeric",
  month:"long"
};
let day=today.toLocaleDateString("hi-IN",options);


Item.find({},(err,results)=>{
  if(results.length ===0)
  {
    Item.insertMany(defaultitems,function(err){
      if(err)
      {
        console.log(err);
      }
    });
    // console.log(err);
    res.redirect("/");
  }
  else if(err)
  {
    console.log(err);
  }
  else{
    res.render("list",{pk:day,lily:results});
    // console.log(results);
  }
})

});



app.post("/",function(req,res){
const itemName = req.body.lily;

const item =new Item({
  name:itemName
});

item.save();

res.redirect("/");
  // console.log(ans);
});

app.post("/delete",function(req,res){
  // console.log(req.body.checkbox);
  const checkeditem=req.body.checkbox;
  Item.findByIdAndRemove(checkeditem,function(err)
{
  if(err){
    console.log(err);
  }
  else{
    res.redirect("/");
    // console.log("YIPEE-KI-YAY MOTHERFUCCCKER!!");
  }
});

});

app.listen(process.env.PORT || 3000,function(){
  console.log("I'm running BITCH!!");
});
