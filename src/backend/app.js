require("dotenv").config();
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const userRoutes = require("./routes/user");
const tutorRoutes = require("./routes/tutor");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const mongoose = require("mongoose");

// try {
//   const m = await mongoose.connect(process.env.DB_URI);
//   console.log(
//     m.connection.readyState == 1
//       ? "Mongoose connected"
//       : "Mongoose failed to connect"
//   );
// } catch (err) {
//   console.error(err);
// }

mongoose.connect(process.env.DB_URI).catch((err) => {
  console.log(err);
});

// Creating express instance
const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API for Bright Academics Tutoring Services",
      version: "1.0.0",
      description: "API Documentation for Student and Tutor Management System",
    },
  },
  apis: ["./routes/user.js", "./routes/tutor.js"],
  tags: [
    {
      name: "User",
      description: "User Route",
    },
    {
      name: "Tutor",
      description: "Tutor Route",
    },
  ],
};

app.use(cors());

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// middleware
app.use(express.json());

// For console reporting purposes temp.
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/tutor", tutorRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
