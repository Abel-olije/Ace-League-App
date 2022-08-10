"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leagueManagement = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const leagueManagementSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
exports.leagueManagement = mongoose_1.default.model("LeagueManagement", leagueManagementSchema);