const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const sigupModal = require("./modals/signup");
const aircraftParts = require("./modals/aircraftsParts");
const listingsModal = require("./modals/listings");
var collection ;
mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb+srv://aerothon:aerothonlogin@hackathon.jytl28h.mongodb.net/", { useNewUrlParser: true })
  .then((data) => console.log("server is connected to mongodb"))
  .catch((err) => console.log(err));
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("<h1> hello </h1>")
})

app.post("/signup",(req,res)=>{ 
    // already == 1 username exists, already = 2 error ,already = 0 new user added
    const obj = req.body;
  const objL = req.body.userName;
  let present = 0;
  sigupModal.find({ userName: objL }).exec((err, usr) => {
    var count = 0;
    for (i in usr[0]) {
      count += 1;
    }

    if (count != 0) {
      res.send({ already: 1 });
    } else {
      var newUser = new sigupModal(obj);
      newUser.save((err, user) => {
        if (err){
            res.send({...user,already:2})  
            return console.log("err");
        }
        res.send({ ...user, already: 0 });
      });
    }
  });
})


app.post("/login", (req, res) => {
    const objL = req.body.userName;
    const response = { mismatch: 0, exists: 1 };
    console.log(objL);
    sigupModal.find({ userName: objL }).exec((err, docs) => {
      if (err) console.log(err);
      else {
        console.log(docs);
        if (docs.length === 0) {
            response.exists = 0;
            res.send(response);
            return;
        }
        else if (docs[0].password !== req.body.password) response.mismatch = 1;
        res.send({...response, type : docs[0].type});
        console.log("login clicked");
      }
    });
  });

  app.get("/aircraftParts/:search/:value",(req,res)=>{

    aircraftParts.find({ [req.params.search]: req.params.value }).exec((err, usr) => {
        if(!err) {
            res.send(usr)
            console.log("working");
        }
    })

  })


  app.get("/listing/your/:username",(req,res)=>{
    listingsModal.find({ userName: req.params.username }).exec((err, data) => {
        if(!err) {
            res.send(data)
            console.log("working");
        }
    })
  })
  app.get("/listing/:to",(req,res)=>{
    listingsModal.find({ to: parseInt(req.params.to) }).exec((err, data) => {
        if(!err) {
            res.send(data)
            console.log("working");
        }
    })
  })

  app.post("/listing",(req,res)=>{
    const obj = req.body;
  const objL = req.body.userName;
      var newUser = new listingsModal(obj);
      newUser.save((err, user) => {
        if (err){
            res.send({error : 1})  
            return console.log("err");
        }
        res.send({ ...user,error : 1});
      });
    
  })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is up and running on ${port}`));
