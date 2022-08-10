import mongoose from 'mongoose';

const clubSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        state: {
            type: String,
            required: true,
        },
        city:{
            type: String,
            required: true
        },
        logo:{
            type: String
        },
    },
    {timestamps: true}
)
export const Clubs =mongoose.model("Clubs", clubSchema);