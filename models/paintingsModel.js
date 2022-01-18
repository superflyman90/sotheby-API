import mongoose from 'mongoose';

const PaintingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Painting = mongoose.model('Painting', PaintingSchema)

export default Painting;