const express = require("express");
var app = express()
const utils = require('./utils.js');
const dongers = require('./donger.json');
const ball = require('./8ball.json');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(" 8ball api online")
})

app.get("/8ball", async (req, res) => {
                    const  eightball = utils.randArray(ball);
                    let response = {
                        status: "success",
                        category: "8ball",
                        result: eightball
                    }
                    return res.status(200).send(response)
                    
                    
                    })
