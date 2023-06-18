This program demonstrates how to use Mongoose, a MongoDB object modeling tool, to connect to a MongoDB database and perform operations on it. It provides examples of saving a single fruit entry and inserting multiple fruit entries into the "Fruit" collection.

How to Run the Program:
To run this program and interact with the MongoDB database, follow these steps:

Install Node.js: If you don't have Node.js installed, visit the official Node.js website (https://nodejs.org) and download the appropriate installer for your operating system. Follow the installation instructions.

Install Dependencies: Open a terminal or command prompt, navigate to the project directory, and run the following command to install the necessary dependencies (in this case, Mongoose):
npm install mongoose

Set Up MongoDB: Make sure you have MongoDB installed and running on your local machine. You can download MongoDB from the official website (https://www.mongodb.com). Start the MongoDB server.

Customize the Connection String: Open the program file (e.g., app.js) in a text editor and modify the MongoDB connection string "mongodb://127.0.0.1:27017/newdb" to match your MongoDB configuration. Ensure that the specified database (newdb in this case) exists or replace it with the desired database name.

Run the Program: In the terminal or command prompt, navigate to the project directory and execute the following command to run the program:
node app.js

The program will establish a connection to the MongoDB database, save a single fruit entry with the name "Mango" and price 30, and insert multiple fruit entries for kiwi, apple, and orange. The console will display the success message "Fruit saved successfully" if the operations are completed successfully. The database connection will then be closed.

Ensure that the MongoDB server is running and accessible on the specified connection string before running the program.

Verify the Results: You can check the MongoDB database to verify that the fruit entries have been saved. Use a MongoDB client or command-line interface to connect to the database and view the "Fruit" collection.

For example, you can use the mongo command-line client and run the following commands:
> use newdb
> db.fruits.find()
