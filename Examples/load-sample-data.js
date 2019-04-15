require("dotenv").config();

const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

const allMovies = JSON.parse(fs.readFileSync("./moviedata.json", "utf8"));

allMovies.forEach(async movie => {
  const params = {
    TableName: "Movies",
    Item: {
      year: movie.year,
      title: movie.title,
      info: movie.info
    }
  };

  try {
    await docClient.put(params).promise();
    console.log("PutItem succeeded:", movie.title);
  } catch (err) {
    console.error(
      "Unable to add movie",
      movie.title,
      ". Error JSON:",
      JSON.stringify(err, null, 2)
    );
  }
});
