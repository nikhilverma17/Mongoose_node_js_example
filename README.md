## GitHub Description

This program demonstrates the use of Mongoose, a MongoDB object modeling tool, to connect to a MongoDB database and perform basic operations such as saving single and multiple entries.

The program includes code snippets that:

- Connect to a MongoDB database
- Define a schema for fruits
- Create a model for the Fruit collection
- Save a single fruit document to the database
- Insert multiple fruit documents to the database

## How to Run the Program

To run this program, you need to have Node.js and MongoDB installed on your machine. Here are the steps:

1. Install Node.js: Go to the official Node.js website (https://nodejs.org) and download the installer for your operating system. Follow the installation instructions to install Node.js.

2. Install MongoDB: Visit the official MongoDB website (https://www.mongodb.com) and download the MongoDB Community Server for your operating system. Install MongoDB by following the provided instructions.

3. Clone the repository: Clone this repository to your local machine using Git or download the code as a ZIP file and extract it.

4. Open a command prompt or terminal, and navigate to the directory where you have cloned/downloaded the code.

5. Install dependencies: Run the following command to install the required dependencies (Mongoose):

   ```
   npm install
   ```

6. Open the `app.js` file in a text editor and update the MongoDB connection URL if needed. By default, it connects to a MongoDB instance running on `127.0.0.1:27017` with the database name `newdb`.

7. Save the changes in the `app.js` file.

8. Run the program: Execute the following command to run the program:

   ```
   node app.js
   ```

   The program will connect to the MongoDB database, save a fruit document, insert multiple fruit documents, and then terminate.

   You can check the results by connecting to your MongoDB database using a MongoDB client or by querying the database programmatically.

Remember to have the MongoDB server running before executing the program.

If you encounter any issues or errors, make sure you have followed the installation steps correctly and check the console output for any error messages.

Please note that this program is intended for educational purposes and may need modifications to fit your specific use case.
