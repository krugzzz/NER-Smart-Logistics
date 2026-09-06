from pydantic import BaseModel
from typing import Optional

class VehicleCreate(BaseModel):
    registration_number: str
    vehicle_type: str
    cargo_category: str
    capacity: float
    driver_name: str
    driver_contact: str

class VehicleResponse(VehicleCreate):
    id: int
