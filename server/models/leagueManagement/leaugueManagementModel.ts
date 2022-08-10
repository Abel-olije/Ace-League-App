import mongoose from "mongoose";

const leagueManagementSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {timestamps: true}
)

export const leagueManagement = mongoose.model("LeagueManagement", leagueManagementSchema) 
