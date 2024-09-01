const app = require("./app.js");
// const mongoose = require("mongoose");

// // DB Connection
// mongoose
//   .connect(process.env.DB_URI)
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(process.env.PORT, () => {
  console.log(
    "Connection to DB Successful, listening on port:",
    process.env.PORT
  );
});
