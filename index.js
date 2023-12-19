import express from "express"
import path from "path";
import HabitController from "./Controller/Habit_Controller.js";
import {connecttomondodb} from "./config/mongodb.js";

const server=express();
//to getting the form data
server.use(express.urlencoded({extended:true}))
server.set('view engine',"ejs");
//des for html files
server.set("views",path.join(path.resolve(),"src",'View'))
//using static files like cssfiles
server.use(express.static("src/View"))
const habits=new HabitController()


server.get("/",(habits.home))
server.get("/Add",(habits.addHabits))
server.post("/",(habits.updateHabits))
server.get("/Details/:id",(habits.Details))
server.get("/Delete/:id",(habits.Delete))
server.post("/Update",(habits.Update))
server.listen(3000,()=>{
    
    console.log("I am Iron-Man")
    connecttomondodb();})



