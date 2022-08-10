"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fans = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const fansSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
exports.Fans = mongoose_1.default.model("Players", fansSchema);
