const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors')
const app = express();

const { GoogleGenerativeAI } = require("@google/generative-ai");

app.use(cors())

app.use(bodyParser.json())

app.post("/getResponse", (req, res) => {
  console.log(req.body.question);
  const genAI = new GoogleGenerativeAI('AIzaSyAhYxyMpPtKJfZaWquw8wzGje2nW0SrNGk');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



  model.generateContent(req.body.question).then((result) => {
    console.log(result.response.text());
    res.status(200).json({
        response:result.response.text()
    })
  }).catch(error=>{
    res.status(500).json({
        error:error
    })
  })
});

app.get('*',(req,res)=>{
    res.status(404).json({
        msg:'Bad request'
    })
})

module.exports = app;
