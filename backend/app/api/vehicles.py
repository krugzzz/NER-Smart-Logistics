from fastapi import APIRouter
from typing import List
from app.models.vehicle import VehicleCreate, VehicleResponse
from app.database.database import db

router = APIRouter()
_vehicle_id_counter = 1

@router.get("/", response_model=List[VehicleResponse])
def get_vehicles():
    return db["vehicles"]

@router.post("/", response_model=VehicleResponse)
def create_vehicle(vehicle: VehicleCreate):
    global _vehicle_id_counter
    new_vehicle = VehicleResponse(
        id=_vehicle_id_counter,
        **vehicle.model_dump()
    )
    db["vehicles"].append(new_vehicle.model_dump())
    _vehicle_id_counter += 1
    return new_vehicle
