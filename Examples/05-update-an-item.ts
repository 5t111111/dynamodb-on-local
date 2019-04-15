import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://localhost:8000"
});

const table = "Movies";

const year = 2015;
const title = "The Big New Movie";

// Update the item, unconditionally,

const params = {
  TableName: table,
  Key: {
    year: year,
    title: title
  },
  UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
  ExpressionAttributeValues: {
    ":r": 5.5,
    ":p": "Everything happens all at once.",
    ":a": ["Larry", "Moe", "Curly"]
  },
  ReturnValues: "UPDATED_NEW"
};

console.log("Updating the item...");

(async () => {
  try {
    const data = await docClient.update(params).promise();
    console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(
      "Unable to update item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  }
})();
