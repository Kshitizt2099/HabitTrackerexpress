import { MongoClient } from "mongodb";
//in url replace localhost by 0.0.0.0
const url='mongodb+srv://kshitijtawra2099:AlanWake2023@cluster0.djh4imd.mongodb.net/?retryWrites=true&w=majority';
let client;
export const connecttomondodb=()=>{
    //it returns promise so we can use then cathch
    MongoClient.connect(url).then(curr=>
            {
                client=curr;
                console.log("it is connected");
            }        
        
        ).catch((err)=>{
           console.log(err);
        }
        )
}
export const getDB=()=>{
       return client.db()
}

