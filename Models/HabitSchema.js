import mongoose from "mongoose";

const Schema={
    name:String,
    weeks:[],
    status:Number

}

export const MainSchema=new mongoose.Schema(Schema);