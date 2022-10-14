const express = require ("express")
const app = express()
const DataRouter = require("./Route/data")
const cors = require("cors")

// app.get("/home", function (req,res) {

//     res.send("Home")
// })

app.use(cors())
app.use("/api",DataRouter)

app.listen(process.env.PORT||8080,function () {
    console.log('node backend project complted')
})
