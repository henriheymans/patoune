const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Walks = new Schema ({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    startDate : {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: false
    },
    dogType: {
        type: String,
        required: false
    },
    participantsNumber : {
        type: Number,
        required: false
    },
    closed: {
        type: Boolean,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Walks", Walks);
