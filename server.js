const express = require("express");
const dotenv = require("dotenv");
const postRouter = require("./routers/postRouter")
const app = express();

dotenv.config();

app.use(express.json());

app.use("/posts", postRouter)

app.use(routeNotFoundMiddleware)
app.listen(process.env.PORT || 3000 , () =>{
    console.log(`http://localhost:${process.env.PORT}`)
});
