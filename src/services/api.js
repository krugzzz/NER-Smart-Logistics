const API_BASE_URL = "http://127.0.0.1:8000/api";

export const api = {
  createVehicle: async (vehicleData) => {
    const response = await fetch(`${API_BASE_URL}/vehicles/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicleData),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || "Failed to register vehicle");
    }
    return response.json();
  },
};
