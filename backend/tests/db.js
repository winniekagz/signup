const mongoose= require("mongoose");
const {MongoMemoryServer}=require('mongodb-memory-server');

const Mongod =new MongoMemoryServer();

// connect db
module.exports.connect=async() =>{
    const uri=await Mongod.geturi();
    const mongooseOpts={
        useNewUrlParser:true,
        useUnifiedTopology:true,
        position:10000
    }
    await mongoose.connect(uri, mongooseOpts);

}
// disconnect and close dbpath
// module.exports.closeDatabase= async () =>{
    // await mongoose.connection.dropDatabase();
    // await mongoose.connection.close();
    // await Mongod.stop();
// }

module.exports.clearDatabase =async () =>{
    const collections=mongoose.connection.collections;
    for (const key in collections) {
        const collection=collections[key];
        await collection.deleteMany();
    }
}