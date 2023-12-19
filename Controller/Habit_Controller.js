import HabitModels from "../Models/Habit_Model.js"
import { getDB } from "../config/mongodb.js";
import { ObjectId } from "mongodb";
//create a class for controller
export default class HabitController
{
    // For handling the homepage operations
    async home(req,res)
    {
        
       
        try{
            const db=getDB();
            const collection=db.collection("habits");
            
    
            let habits= await collection.find({}).toArray();
            
            res.render("Home",{habits})
        }
        catch(err)
        {
            return res.status(401).send("Dtabase connectivity issue")
        }
        
    }
    //For rending the Add Habit page
    addHabits(req,res)
    {
        res.render("Add")
    }
    //For putting the new habit in DB
    updateHabits(req,res)
    {
        const {name}=req.body;
        
        HabitModels.add(name);
        
        res.redirect("/")

    }
    //For rendering the details view/weekview of the chosen habit
    async  Details(req,res)
    {
        const id=req.params.id;
         
        try{
            const db=getDB();
            const collection=db.collection("habits");
           

           let tar= await collection.findOne({_id: new ObjectId(id)});
           
            res.render("Details",{tar})
            

        }
        catch(err)
        {
            return res.status(401).send("No Element")
        }
        
    }
    //To Delete the habit
    async Delete(req,res)
    {
        const id=req.params.id;
         
        try{
            const db=getDB();
            const collection=db.collection("habits");
           

            await collection.deleteOne({_id: new ObjectId(id)});
            
            res.redirect("/")
            

        }
        catch(err)
        {
            return res.status(401).send("No Element")
        }
        

    }
    //To Change the status of the habit.
    async Update(req,res)
    {
        
        const {did,id,command}=req.body;
        
        try{
            const db=getDB();
            const collection=db.collection("habits");
            let tar= await collection.findOne({_id: new ObjectId(id)});
            const objIndex = tar.weeks.findIndex((obj => obj.did == did));
            let curr_status=tar.status;

            if(tar.weeks[objIndex].status == "Notdone" && command=="Done")
            {
                
                tar.weeks[objIndex].status = "Done"
                if(curr_status<7)
                {
                    curr_status+=1;
                }
                
            }
            else if(tar.weeks[objIndex].status == "Done" && command=="Notdone"){
                
                tar.weeks[objIndex].status = "Notdone"
                if(curr_status>0)
                {
                    curr_status-=1;
                }
            }
            
            await collection.updateOne({_id: new ObjectId(id)},{$set:{weeks:tar.weeks,status:curr_status}})
            res.redirect("/Details/"+id)
        



        }
        catch(err)
        {
            return res.status(401).send("No Element") 
        }
        
    }


}
