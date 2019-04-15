import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://localhost:8000"
});

const table = "Movies";

const year = 2015;
const title = "The Big New Movie";

const params = {
  TableName: table,
  Key: {
    year: year,
    title: title
  }
};

(async () => {
  try {
    const data = await docClient.get(params).promise();
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(
      "Unable to read item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  }
})();
