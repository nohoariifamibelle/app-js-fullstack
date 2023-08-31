const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

//Connexion à la DB
connectDB();

const app = express();
const port = 5000;

//Middleware qui permet de traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/post", require("./routes/post.routes"));

// Lancer le server
app.listen(port, () => console.log("Le serveur a démarré au port " + port));

