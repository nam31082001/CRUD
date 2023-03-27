const mongoose=require('mongoose')


async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("gọi db thàng công")
    }
    catch(error){
        console.log('sai ở DB nhé'+ error)
    }
}
module.exports = { connect }