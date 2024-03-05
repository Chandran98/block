const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors());
app.use("/", (req, res) => {
    res.status(200).json({ message: "Normal" ,code:"1"});
  });
  // app.use("/kex", (req, res) => {
  //   res.status(200).json({ message: "Busted" ,code:"1"});
  // });


//  0 - to stop Vpe

//  1 - to stop kairaa exchange

//  2 - to normal run both


app.all("*", (req, res) => {
    res.status(404);
  
    res.sendFile("views/404.html", { root: __dirname });
    throw new Error("Route Not Found");
  });

  const port =4000;
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
