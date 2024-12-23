import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1: Allow all origins with default of CORS(*)
//app.use(cors());

//Option 2: Allow custom origins
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowHeaders: ['Content-Type'],
    })
)

app.get('/', (request, response) =>{
    console.log(request)
    return response.status(234).send('')
});

app.use('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(() =>{
        console.log('App connected to database');
        app.listen(PORT, () =>{
            console.log(`App is listening to: ${PORT}`)
        });

    })
    .catch((error) =>{
        console.log(error)

});