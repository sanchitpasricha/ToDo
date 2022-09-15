const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Code","Coffee","Lift","Sleep"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  let today = new Date();

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {listTitle: day, newlistItem: items});
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "work List", newlistItem: workItems});
});

app.post("/",function(req,res){
  let item = req.body.newItem;

  if(req.body.list === "work"){
    workItems.push(item);
    res.redirect("/work")
  }else{
    items.push(item);
    res.redirect("/")
  }
})


app.listen(3000, function(){
  console.log("Server running on port 3000");
})
