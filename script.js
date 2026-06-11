const API_URL = "http://localhost:5000/api/vehicles";

async function loadVehicles() {
  const response = await fetch(API_URL);
  const vehicles = await response.json();

  const vehicleList = document.getElementById("vehicleList");
  vehicleList.innerHTML = "";

  vehicles.forEach(vehicle => {
    vehicleList.innerHTML += `
      <div class="vehicle-card">
        <h3>${vehicle.brand} ${vehicle.model}</h3>
        <p>Type: ${vehicle.type}</p>
        <p>Daily Rate: Rs. ${vehicle.dailyRate}</p>
        <p class="status">
          ${vehicle.available ? "Available" : "Not Available"}
        </p>
      </div>
    `;
  });
}

async function addVehicle() {
  const vehicle = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    type: document.getElementById("type").value,
    dailyRate: Number(document.getElementById("dailyRate").value),
    available: true
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vehicle)
  });

  loadVehicles();
}

loadVehicles();
