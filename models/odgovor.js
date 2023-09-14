const mongoose = require("mongoose")

const odgovorSchema = mongoose.Schema({
    pol: {
        type: String,
        required: true,
    },
    ime: {
        type: String,
        required: true,
    },
    prezime: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    zanr: {
        type: String,
        required: true,
    },
    predlog: String
})

const Odgovor = mongoose.model("Odgovor", odgovorSchema)

module.exports = Odgovor;