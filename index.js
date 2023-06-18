const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/newdb", { useNewUrlParser: true, useUnifiedTopology: true });
//creating Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  Price: Number
});
//for single entry in data base
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name: "Mango",
  Price: 100
});

// fruit.save()
//   .then(() => {
//     console.log('Fruit saved successfully');
//     mongoose.connection.close();
//   })
//   .catch(err => console.error('Error saving fruit:', err));


//inserting multiple data at a time

// async function insertFruits(fruits) {
//   try {
//     const insertedFruits = await Fruit.insertMany(fruits);
//     console.log('Inserted fruits:', insertedFruits);
//   } catch (err) {
//     console.error('Error inserting fruits:', err);
//   } finally {
//     mongoose.connection.close();
//   }
// }
// const fruitsToInsert = [
//   { name: "Watermelon", Price: 150 },
//   { name: "pineapple", Price: 200 },
//   { name: "grapes", Price: 50 }
// ];
// insertFruits(fruitsToInsert);


// READ opration
// async function readFruits() {
//   try {
//     const fruits = await Fruit.find();
//     console.log('All fruits:', fruits);
//   } catch (err) {
//     console.error('Error reading fruits:', err);
//   } finally {
//     mongoose.connection.close();
//   }
// }
// readFruits();

// UPDATE operation
// const updateFruitByName = async (fruitName, updatedFields) => {
//   try {
//     const fruit = await Fruit.findOneAndUpdate({ name: fruitName }, updatedFields, { new: true });
//     console.log('Updated fruit:', fruit);
//   } catch (err) {
//     console.error('Error updating fruit:', err);
//   } finally {
//     mongoose.connection.close();
//   }
// };
// updateFruitByName("pineapple", { Price: 35 });

// DELETE operation
// async function deleteFruit(fruitId) {
//   try {
//     const deletedFruit = await Fruit.findByIdAndRemove(fruitId);
//     console.log('Deleted fruit:', deletedFruit);
//   } catch (err) {
//     console.error('Error deleting fruit:', err);
//   } finally {
//     mongoose.connection.close();
//   }
// }
// deleteFruit('648ec45f9f78cd11b9a2cbde')






