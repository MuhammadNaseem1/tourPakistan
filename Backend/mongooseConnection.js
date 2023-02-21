var mongoose=require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/mydb").then(()=>
{
    console.log("Successfully connected to Mongodb")
}
).catch((err)=>
{
    console.log(err);
}
)
// schema defines the key that will be the in the document
const student=mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    email: {type:String, required:true}
})

//automatically adds s at the end of the schema variable
const Student=mongoose.model("student",student)

const add=async()=>
{
    //Student is the document, to which we can add document either by passing values to the constructor of the Student
    //or the predefined methods of the mongodb accessed via Student which is a collection
    const data= await Student.find({name:{$eq:"Naseem"}})
    console.log(data);
}

add();