import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

import cors from 'cors';


dotenv.config();
connectDB();
const port = process.env.PORT || 300
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => res.send('Server ready'))
app.listen(port, () => console.log(`Server start port ${port}`))
