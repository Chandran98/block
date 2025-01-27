const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors());
app.use("/", (req, res) => {
    res.status(200).json({ message: "Normal" ,code:"2",payout:"1",payin:"1",poster:"1",test:"test"});
  });
  // app.use("/kex", (req, res) => {
  //   res.status(200).json({ message: "Busted" ,code:"1"});
  // });


//  0 - to stop Vpe

//  1 - to stop kairaa exchange

//  2 - to normal run both

//  1 - to stop payin & payOut

app.all("*", (req, res) => {
    res.status(404);
  
    res.sendFile("views/404.html", { root: __dirname });
    throw new Error("Route Not Found");
  });

  const port =4000;
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
