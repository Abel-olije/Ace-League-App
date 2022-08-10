import mongoose from 'mongoose'

const playersSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        jerseynumber: {
            type: Number,
            required: true,
            unique: true,
        },
        position: {
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
            unique: true,
        },
        club: {
            type: String,
            required: true,
        },
        isBanned: {
            type: Boolean,
            default: false
        }
    },
    {timestamps:true}
);

export const Players = mongoose.model("Players", playersSchema)