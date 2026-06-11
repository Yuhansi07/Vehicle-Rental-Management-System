const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let vehicles = [
  {
    id: 1,
    brand: "Toyota",
    model: "Aqua",
    type: "Car",
    dailyRate: 8500,
    available: true
  },
  {
    id: 2,
    brand: "Honda",
    model: "Vezel",
    type: "SUV",
    dailyRate: 12000,
    available: true
  }
];

app.get("/", (req, res) => {
  res.send("Vehicle Rental Management System Backend Running");
});

app.get("/api/vehicles", (req, res) => {
  res.json(vehicles);
});

app.post("/api/vehicles", (req, res) => {
  const newVehicle = {
    id: vehicles.length + 1,
    brand: req.body.brand,
    model: req.body.model,
    type: req.body.type,
    dailyRate: req.body.dailyRate,
    available: req.body.available
  };

  vehicles.push(newVehicle);

  res.status(201).json({
    message: "Vehicle added successfully",
    vehicle: newVehicle
  });
});

app.delete("/api/vehicles/:id", (req, res) => {
  vehicles = vehicles.filter(v => v.id !== Number(req.params.id));

  res.json({ message: "Vehicle deleted successfully" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
