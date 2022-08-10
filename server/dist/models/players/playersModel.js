"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Players = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const playersSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
exports.Players = mongoose_1.default.model("Players", playersSchema);
