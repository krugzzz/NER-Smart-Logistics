import React, { useState } from "react";
import Button from "../../components/Button";
import { api } from "../../services/api";
const RegisterVehicle = () => {
  const [formData, setFormData] = useState({
    registration_number: "",
    vehicle_type: "Light Commercial Vehicle",
    cargo_category: "General Goods",
    capacity: "",
    driver_name: "",
    driver_contact: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    setLoading(true);
    try {
      const vehicleData = { ...formData, capacity: Number(formData.capacity) };
      const vehicle = await api.createVehicle(vehicleData);
      console.log("Vehicle registered:", vehicle);
      setSuccess(true);
      setFormData({
        registration_number: "",
        vehicle_type: "Light Commercial Vehicle",
        cargo_category: "General Goods",
        capacity: "",
        driver_name: "",
        driver_contact: "",
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Vehicle registration failed:", err);
      setError(err.message || "Failed to register vehicle");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      {" "}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {" "}
        Register Vehicle{" "}
      </h2>{" "}
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          {" "}
          Vehicle registered successfully!{" "}
        </div>
      )}{" "}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {" "}
          {error}{" "}
        </div>
      )}{" "}
      <form onSubmit={handleSubmit} className="space-y-6">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Registration Number{" "}
            </label>{" "}
            <input
              type="text"
              name="registration_number"
              value={formData.registration_number}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. AS-01-XX-1234"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Vehicle Type{" "}
            </label>{" "}
            <select
              name="vehicle_type"
              value={formData.vehicle_type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {" "}
              <option>Light Commercial Vehicle</option>{" "}
              <option>Heavy Truck</option>{" "}
              <option>Refrigerated Van</option>{" "}
            </select>{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Cargo Category{" "}
            </label>{" "}
            <select
              name="cargo_category"
              value={formData.cargo_category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {" "}
              <option>General Goods</option> <option>Perishables</option>{" "}
              <option>Medical Supplies</option>{" "}
              <option>Hazardous Material</option>{" "}
            </select>{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Cargo Weight/Capacity (Tonnes){" "}
            </label>{" "}
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 15.5"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Driver Name{" "}
            </label>{" "}
            <input
              type="text"
              name="driver_name"
              value={formData.driver_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Driver Contact{" "}
            </label>{" "}
            <input
              type="tel"
              name="driver_contact"
              value={formData.driver_contact}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="pt-4 border-t border-gray-100 flex justify-end">
          {" "}
          <Button type="submit" disabled={loading}>
            {" "}
            {loading ? "Registering..." : "Register Vehicle"}{" "}
          </Button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};
export default RegisterVehicle;
