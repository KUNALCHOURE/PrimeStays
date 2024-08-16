const mongoose=require("mongoose");
const listing=require("../models/listing.js") ;
const initData=require("./data.js");


const MONGO_URL='mongodb://127.0.0.1:27017/wonderlust';
async function main(){
    await mongoose.connect(MONGO_URL);
}
main()
 .then(()=>{
    console.log("connected to DB");

}
)
 .catch((err)=>{
    console.log(err);
});

const initDB=async()=>{
    
    await listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({
        ...obj,owner:"66badd5db559b2acfc314b18"

    }));
     await listing.insertMany(initData.data);
 console.log("data was initialized");
}
initDB();