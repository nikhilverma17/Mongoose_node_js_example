This program is a simple script that demonstrates how to connect to a MongoDB database using Mongoose and perform basic operations such as saving data to the database and inserting multiple entries at once.

To run the program, you need to follow these steps:

1. Install the required dependencies. Make sure you have Node.js and npm (Node Package Manager) installed on your system. Then, in the terminal, navigate to the project directory and run the following command to install the necessary packages:

```shell
npm install mongoose
```

2. Ensure that you have MongoDB installed and running on your local machine. By default, MongoDB listens on port 27017.

3. Copy the code into a JavaScript file (e.g., `app.js`) within your project directory.

4. In the code, you will notice a connection string `"mongodb://127.0.0.1:27017/newdb"`. If you are using a different MongoDB configuration (e.g., different host, port, or database name), modify this string accordingly.

5. In the terminal, navigate to the project directory and run the following command:

```shell
node app.js
```

6. If everything is set up correctly, the program will connect to the MongoDB database, create a `Fruit` model based on the defined schema, and save a fruit entry (in this case, a mango) to the database. If the operation is successful, you will see the message "Fruit saved successfully" in the console.

7. After saving the fruit, the program will close the database connection.

8. Additionally, the program inserts multiple fruits (kiwi, apple, and orange) into the database using the `insertMany` method.

That's it! You have successfully run the program and interacted with a MongoDB database using Mongoose. Feel free to modify the code or extend it to suit your needs.
