import express from "express";

const app = express();
const port = 3000;
const profileData = {
  data: {
    name: "john",
    age: 20,
  },
};

app.get("/profiles", (req, res) => {
  return res.status(200).json(profileData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
