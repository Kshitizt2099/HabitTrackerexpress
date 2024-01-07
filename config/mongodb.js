import mongoose from "mongoose";
const url="mongodb+srv://kshitijtawra2099:AlanWake2023@cluster0.djh4imd.mongodb.net/?retryWrites=true&w=majority"

export const connecttodb=async()=>{
    
    try{
           await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
           });
    }
    catch(err){
        console.log(err);

    }
}
