"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose = require('mongoose');
const connectDB = () => {
    const connect = mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${connect.connection.host}`);
};
exports.connectDB = connectDB;
