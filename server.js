import express from 'express'
import dotenv from 'dotenv'
const PORT = 8080;
const app = express();
dotenv.config();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/',(req,res) => {
    res.status(200).send({message:'Hello from p-mozil server.', key: process.env.API_KEY});
})
app.listen(PORT, () => console.log("Server started on port " + PORT));