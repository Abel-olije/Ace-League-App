import mongoose from "mongoose";

const coachSchema = new mongoose.Schema(
    {
        firstname: {
            type:String,
            required: true,
        },
        lastname: {
            type:String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);
export const Coach = mongoose.model("Coach", coachSchema);