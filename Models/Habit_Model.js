import { getDB } from "../config/mongodb.js";
import { weekdetailcreator } from "./weekmanagement.js";


let habits;
export default class HabitModels{
  
    
              
    
    static async add(name)
    {
        const db=getDB();
        const collection=db.collection("habits");
        const weeks=weekdetailcreator(Math.random()*10);
        try{
            await collection.insertOne({name,weeks,status:0});
           console.log("added")
        }
        catch(err)
        {
          console.log(err);
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