"use strict";

const app = require("../FrontendNew/src/app");
const { PORT } = require("./config");
const authRoutes = require("./routes/auth")

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});

app.use(`/auth`, authRoutes)
app.listen()


