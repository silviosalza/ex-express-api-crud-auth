const express = require("express");
const routeNotFoundMiddleware = require('./middlewares/routeNotFound');
const postRouter = require("./routers/postRouter")
const tagRouter = require("./routers/tagRouter")
const categoryRouter = require("./routers/categoryRouter")
const authRouter = require("./routers/authRouter")
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors())
app.use("/posts", postRouter)
app.use("/tags", tagRouter)
app.use("/category", categoryRouter)
// app.use("", authRouter)
app.use(routeNotFoundMiddleware)
app.listen(process.env.PORT || 3000 , () =>{
    console.log(`http://localhost:${process.env.PORT}`)
});
