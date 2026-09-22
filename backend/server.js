import express from "express"
import "dotenv/config";
import cors from "cors";
import contactroutes from "./routes/contactroutes.js"
import connectDB from "./config/db.js";
const app = express()
const port = process.env.port || 3000


app.use(express.json());

const allowOrigins = ["http://localhost:5173", "https://sandeepkohlisk-portfolio-website.netlify.app"]
app.use(cors({origin: allowOrigins, methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"], credentials: true}));   //Allow diffenet orgins

connectDB();

app.get('/', (req, res) => {
  res.send('Hello Backend is Running!')
})


//routes:-
app.use('/api', contactroutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
