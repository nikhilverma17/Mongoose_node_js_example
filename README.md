## Program Description

This program demonstrates the use of Mongoose, a MongoDB object modeling tool, to connect to a MongoDB database and perform basic operations such as saving single and multiple entries.

The program starts by importing the required dependencies and connecting to a MongoDB database running on `localhost` at port `27017`. The database name is specified as "newdb".

A schema called `fruitSchema` is created using Mongoose's Schema class, defining the structure of a fruit document in the database. The schema has two fields: `name` of type String and `Price` of type Number.

A model called `Fruit` is created using the `Fruit` schema. The `Fruit` model represents the collection of fruits in the database.

Next, a single fruit document with the name "Mango" and price 30 is created using the `Fruit` model. The `save()` method is called on the fruit object to save it to the database. If the saving operation is successful, a success message is logged to the console, and the database connection is closed. If an error occurs during the saving process, an error message is logged.

Following that, three additional fruit documents (kiwi, apple, and orange) are created using the `Fruit` model. These documents are then inserted into the database using the `insertMany()` method, which accepts an array of documents to be inserted.

## How to Run the Program

To run this program, you need to have Node.js and MongoDB installed on your machine. Here are the steps:

1. Install Node.js: Go to the official Node.js website (https://nodejs.org) and download the installer for your operating system. Follow the installation instructions to install Node.js.

2. Install MongoDB: Visit the official MongoDB website (https://www.mongodb.com) and download the MongoDB Community Server for your operating system. Install MongoDB by following the provided instructions.

3. Create a new directory on your computer and navigate to it using the command line.

4. Create a new JavaScript file, e.g., `app.js`, and open it in a text editor.

5. Copy the provided code into the `app.js` file and save it.

6. Open a command prompt or terminal, navigate to the directory where the `app.js` file is located.

7. Run the following command to install the required dependencies (Mongoose):

   ```
   npm install mongoose
   ```

8. Once the installation is complete, run the program using the following command:

   ```
   node app.js
   ```

   The program will connect to the MongoDB database, save a fruit document, insert multiple fruit documents, and then terminate.

   You can check the results by connecting to your MongoDB database using a MongoDB client or by querying the database programmatically.

Please note that you may need to adjust the MongoDB connection URL (`mongodb://127.0.0.1:27017/newdb`) based on your specific MongoDB setup.
