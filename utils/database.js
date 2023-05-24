import mongoose from 'mongoose';

let isConnected = false; //tract the connection status

export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log('Mongo DB is already connected');
        return;
    }

    try{
       await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "GPTPrompt",
        useNewUrlParser:true,
        useUnifiedTopology:true,
       })

       isConnected= true;
       console.log('MongoDB Connected')
    }catch(error){
       console.log(error);
    }
}