import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { dbConnect } from "./lib/dbConnect"
// Routes
import { compilerRoutes } from "./routes/compilerRoutes"
import { userRoutes } from "./routes/userRoutes"
const app = express()


app.use(express.json())
app.use(cors())
config();

app.use("/compiler", compilerRoutes)
app.use("/auth", userRoutes)

dbConnect()
app.listen(4000, () => {
    console.log("http:/localhost:4000")
})  