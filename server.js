const express = require("express")
const app = express()

app.use("/", (req,res) => {
    res.send("hello")
})

const server = app.listen(8000, () => {
    console.log("Server is running on port 8000")
})

process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server is stopped")
    })
})