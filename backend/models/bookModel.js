import mongoose  from "mongoose";

const bookSchema = mongose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        }, 
    },
    {
        timestamps: true,
    }
)

export const Book = mongoose.model('Book', { name: bookSchema });