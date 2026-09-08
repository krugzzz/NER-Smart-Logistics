import React, { useState } from "react";
import Button from "../../components/Button";
import { api } from "../../services/api";
const CreateTrip = () => {
  const [formData, setFormData] = useState({
    vehicle_id: "",
    origin: "",
    destination: "",
    cargo_category: "General",
    cargo_priority: "Standard",
  });
  const [calculating, setCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCalculate = async (e) => {
    e.preventDefault();
    setCalculating(true);
    setShowResult(false);
    setError("");
    try {
      const tripData = { ...formData, vehicle_id: Number(formData.vehicle_id) };
      const createdTrip = await api.createTrip(tripData);
      console.log("Trip created:", createdTrip);
      setTrip(createdTrip);
      setShowResult(true);
    } catch (err) {
      console.error("Trip creation failed:", err);
      setError(err.message || "Failed to create trip");
    } finally {
      setCalculating(false);
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {" "}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 h-fit">
        {" "}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {" "}
          Create Trip{" "}
        </h2>{" "}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            {" "}
            {error}{" "}
          </div>
        )}{" "}
        <form onSubmit={handleCalculate} className="space-y-6">
          {" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Vehicle ID{" "}
            </label>{" "}
            <input
              type="number"
              name="vehicle_id"
              value={formData.vehicle_id}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. 1"
            />{" "}
            <p className="text-xs text-gray-500 mt-1">
              {" "}
              Enter the ID of your registered vehicle.{" "}
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Starting Location{" "}
            </label>{" "}
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Guwahati"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Destination{" "}
            </label>{" "}
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Tawang"
            />{" "}
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
              <option>General</option> <option>Perishable</option>{" "}
              <option>Medical Emergency</option>{" "}
            </select>{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {" "}
              Cargo Priority{" "}
            </label>{" "}
            <select
              name="cargo_priority"
              value={formData.cargo_priority}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {" "}
              <option>Standard</option> <option>High</option>{" "}
              <option>Critical (SOS)</option>{" "}
            </select>{" "}
          </div>{" "}
          <div className="pt-4">
            {" "}
            <Button
              type="submit"
              disabled={calculating}
              className="w-full flex justify-center"
            >
              {" "}
              {calculating
                ? "Creating Trip..."
                : "Calculate Recommended Route"}{" "}
            </Button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
      <div className="space-y-6">
        {" "}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center min-h-[250px]">
          {" "}
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {" "}
            Recommended Route{" "}
          </h3>{" "}
          {showResult ? (
            <div className="text-center">
              {" "}
              <p className="text-green-700 font-medium mb-1">
                {" "}
                Trip created successfully!{" "}
              </p>{" "}
              <p className="text-sm text-gray-600"> Trip ID: {trip.id} </p>{" "}
              <p className="text-sm text-gray-600">
                {" "}
                Route Status: {trip.route_status}{" "}
              </p>{" "}
            </div>
          ) : (
            <p className="text-gray-500 text-sm"> Route will appear here </p>
          )}{" "}
        </div>{" "}
        <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
          {" "}
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            {" "}
            Risk Analysis{" "}
          </h3>{" "}
          {showResult ? (
            <div className="text-center">
              {" "}
              <p className="text-blue-700 font-medium mb-1">
                {" "}
                Risk analysis status: {trip.risk_status}{" "}
              </p>{" "}
              <p className="text-sm text-gray-500">
                {" "}
                AI risk analysis will be added in the next stage.{" "}
              </p>{" "}
            </div>
          ) : (
            <p className="text-blue-500/70 text-sm">
              {" "}
              AI risk analysis will appear here{" "}
            </p>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default CreateTrip;
