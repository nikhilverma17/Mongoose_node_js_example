const mongoose= require ('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/newdb",{ useNewUrlParser: true, useUnifiedTopology: true });
//creating Schema
const fruitSchema=new mongoose.Schema({
  name:String,
  Price:Number
});
//for single entry in data base
const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
  name:"Mango",
  Price:30
});

fruit.save()
  .then(() => {
    console.log('Fruit saved successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error saving fruit:', err));    

  
//inserting multiple data at a time
    const kiwi=new Fruit({
      name:"kiwi",
      Price:150
    })
    const apple=new Fruit({
      name:"apple",
      Price:200
    })
    const orange=new Fruit({
      name:"orange",
      Price:50
    })

    Fruit.insertMany([kiwi,apple,orange]);
    