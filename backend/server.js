import express from "express"
import cors from "cors";
import contactroutes from "./routes/contactroutes.js"
import connectDB from "./config/db.js";
import dotenv from "dotenv";
const app = express()
const port = process.env.port || 3000

//env varaible secret
dotenv.config();

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello Backend is Running!')
})


//routes:-
app.use('/api', contactroutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
