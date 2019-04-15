import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://localhost:8000"
});

const table = "Movies";

const year = 2015;
const title = "The Big New Movie";

// Increment an atomic counter

const params = {
  TableName: table,
  Key: {
    year: year,
    title: title
  },
  UpdateExpression: "set info.rating = info.rating + :val",
  ExpressionAttributeValues: {
    ":val": 1
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
