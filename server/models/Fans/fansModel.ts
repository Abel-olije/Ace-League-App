import mongoose from 'mongoose'

const fansSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "Insert a name"],
        },
        lastname: {
            type: String,
            required: [true, "Last name is required"],
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {timestamps:true}
);

export const Fans = mongoose.model("Players", fansSchema)