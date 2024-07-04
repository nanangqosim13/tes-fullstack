const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk parsing JSON dan form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router untuk tasks
const tasksRouter = require("./routes/tasks");
app.use("/tasks", tasksRouter);

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
