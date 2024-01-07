
import mongoose from "mongoose";
import { weekdetailcreator } from "./weekmanagement.js";
import { MainSchema } from "./HabitSchema.js";

const HabitModel=mongoose.model('AllHabits',MainSchema);
let habits;
export default class HabitModels{
  
    
              
    
    static async add(name)
    {
       
        
        const weeks=weekdetailcreator(Math.random()*10);
    
        try{
            // create instance of model.
          
            const newHabit = new HabitModel({name,weeks,status:0});
            await newHabit.save();
            console.log("added");
           
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }

        
    }
    static getById(id)
    {
       console.log(id);
       
    }
    static Delete(id)
    {
       habits=habits.filter(i=>i.id!=id)
       console.log(habits);
    }

}
