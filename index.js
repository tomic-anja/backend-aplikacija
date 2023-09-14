const fs = require("fs");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

const Odgovor = require("./models/odgovor");
const connectDB = require("./config/db");

dotenv.config();

const port = process.env.PORT || 5000;
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("helou!")
})

app.post("/odgovori", async (req, res) => {

    try {
        const { ime, prezime, pol, email, zanr, predlog } = req.body;

        const odgovor = await Odgovor.create({ ime, prezime, pol, email, zanr, predlog });

        const odgovorJson = JSON.stringify(odgovor);
        fs.writeFile(`./data/${odgovor.id}.json`, odgovorJson, "utf8", (error) => {
            if (error) console.log("greska pri upisu fajla");
            console.log("uspesno uneto u fajl");
        })

        res.json(odgovor);
    } catch (error) {
        res.json({ message: error.message })
    }

})

app.listen(port, () => {
    console.log(`server slusa na portu ${port}`)
})