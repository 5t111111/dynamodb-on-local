import AWS from "aws-sdk";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://localhost:8000"
});

console.log("Importing movies into DynamoDB. Please wait.");

const allMovies = JSON.parse(fs.readFileSync("./moviedata.json", "utf8"));

allMovies.forEach(async (movie: any) => {
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
