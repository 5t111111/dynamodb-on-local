import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://localhost:8000"
});

const table = "Movies";

const year = 2015;
const title = "The Big New Movie";

var params = {
  TableName: table,
  Item: {
    year: year,
    title: title,
    info: {
      plot: "Nothing happens at all.",
      rating: 0
    }
  }
};

console.log("Adding a new item...");

(async () => {
  try {
    await docClient.put(params).promise();
  } catch (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  }
})();
