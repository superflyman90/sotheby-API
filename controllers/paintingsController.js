import PaintingModel from '../models/paintingsModel.js'

export const addPainting = async (req, res) => {
    const painting = new PaintingModel(req.body)
    await painting.save()
    res.send(painting)
};

export const getPaintings = async (req, res) => {
    const paintings = await PaintingModel.find({})
    res.send(paintings)
};