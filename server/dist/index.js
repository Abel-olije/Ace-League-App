"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectDB = require('./config/db');
dotenv_1.default.config();
const app = (0, express_1.default)();
// initiate DB connection
connectDB();
// connect middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded);
app.use((0, morgan_1.default)("dev"));
// assign routes
// connect to database
//listen for port
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(` i am running on port:  ${PORT}`);
});
