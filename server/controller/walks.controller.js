const WalksService = require('../service/walks.service');

exports.getAll = async(req, res) => {
    try {
        const walksList = await WalksService.getAll();
        console.log("Walklist => ", walksList)
        return res.status(200).json({
            walksList
        })
    }
    catch(error) {
        console.log(error.message)
        return res.status(400).json({
            message: error.message
        })
    }
}

exports.getOne = async(req,res) => {
    const walkId = req.params.id;
    try {
        const walkSelected = await WalksService.getOne(walkId);
        return res.status(200).json({
            walkSelected
        })
    }
    catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

exports.createWalk = async(req, res) => {
    const newWalk = req.body;
    try {
        await WalksService.createWalk(newWalk);
        res.status(201).json({
            message: "Walk Created successfully"
        })
    }
    catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}