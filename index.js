const express = require("express");
const app = express();

app.use(express.json());
// Remind That require path is routes folder not a models folder Error Resolve
// Futher ma ager koi majer change karni pada toa is liya hum versioning use karta h mean (v1)
app.use("/api/v1/cashier", require("./routes/cashier"));

app.use("*", async (req, res, next) => {
  try {
    return next(new Error("Error is Here"));
  } catch (error) {
    res.status(404).send(`page Not Found ${req.baseUrl}`);
  }
});

app.use((err, req, res, next) => {
  res.send(err.message);
});

app.listen(4000, () => console.log(`Server Run at Port 4000`));

// password !c9n4jDn7N_Rtvx