const {Exercise}= require("../models/exercise.model")

let findExercise=(req,res)=>{
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err=> res.status(400).json("error"+err))
}

let addExercises= (req,res)=>{
    const{username,description,duration,date} = req.body

    const newExercise= new Exercise({
        username,
        description,
        duration,
        date
    })
}

module.exports={
    findExercise,
    addExercises
}