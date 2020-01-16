require('dotenv').config();
const express = require('express');
const cors = require('cors');
const{json}= require("body-parser")
const mongoose= require("mongoose")
const routes= require("./routes/routes")

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(json())

const uri=process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true})

const connection=mongoose.connection
connection.once("open",()=>{
    console.log(`connected to mongo`)
})

routes(app)

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
