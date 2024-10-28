import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boiled Egg",
      price: 15,
      text: "A boiled egg, rich in protein and healthy fats, is a great start to your day.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 70,
      text: "Delicious and savory RAMEN, perfect for a fulfilling lunch.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 200,
      text: "Juicy grilled chicken, a high-protein dinner option to keep you satisfied.",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 250,
      text: "A delightful cake to satisfy your sweet cravings in the morning.",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 100,
      text: "A tasty burger, packed with flavors, perfect for a hearty lunch.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 150,
      text: "Fluffy pancakes, a delicious and filling dinner choice.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
