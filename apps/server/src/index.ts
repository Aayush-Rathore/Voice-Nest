const express = require("express");
const app = express();
const PORT: number = 8000;

app.get("/", (req: object, res: any) => {
  res.send("This will be the Back-End of the application");
});

app.listen(PORT, () => {
  console.log(`server in runing on port ${PORT}`);
});
