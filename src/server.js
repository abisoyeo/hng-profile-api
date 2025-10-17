import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/me", async (req, res) => {
  const result = await axios.get("https://catfact.ninja/fact");
  const { fact } = result.data;
  const currentTime = new Date().toISOString();

  res.json({
    status: "success",
    user: {
      email: "ogunmonaa@gmail.com",
      name: "Abisoye Ogunmona",
      stack: "Node.js/Express, C#/ASP.NET Core",
    },
    timestamp: currentTime,
    fact: fact,
  });
});

app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Error startinng server:", error);
  }
});
