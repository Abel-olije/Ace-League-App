"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clubs = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const clubSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
}, { timestamps: true });
exports.Clubs = mongoose_1.default.model("Clubs", clubSchema);
