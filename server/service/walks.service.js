const Walks = require('../models/walks.model');

exports.getAll = async () => {
    try {
        return await Walks.find({});
    }
    catch(err) {
        throw Error('Cannot fetch walks' + err);
    }
}

exports.getOne = async (walkId) => {
    try {
        return await Walks.findById(walkId).exec();
    } catch (error) {
        
    }
}

exports.createWalk = async (query) => {
    try {
        const newWalk = new Walks(query);
        // CHANGE THIS LATER
        newWalk.startDate = Date.now();
        return await newWalk.save();
    } catch (e) {
        throw Error("Error registering walk " + e);
    }
}