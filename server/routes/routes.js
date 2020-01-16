
const{getUser,addUser}= require("../controllers/userCtrl")
const{findExercise,addExercises}= require("../controllers/exerciseCtrl")


module.exports=(app)=>{
    app.get("/api/user",getUser)
    app.post(`/api/add`,addUser)
    app.get("/api/exercise",findExercise)
    app.post(`/api/addexercise`,addExercises)
}