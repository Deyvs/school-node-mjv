import express from "express";
import cors from "cors";
import routes from "./routers";
import connection from "./config/database";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

connection
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch(() => {
    console.log("Some error has occured!");
  });

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
