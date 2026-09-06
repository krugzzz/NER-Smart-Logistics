from fastapi import APIRouter
from typing import List
from app.models.trip import TripCreate, TripResponse
from app.database.database import db

router = APIRouter()
_trip_id_counter = 1

@router.get("/", response_model=List[TripResponse])
def get_trips():
    return db["trips"]

@router.post("/", response_model=TripResponse)
def create_trip(trip: TripCreate):
    global _trip_id_counter
    # Placeholder for routing and risk status
    new_trip = TripResponse(
        id=_trip_id_counter,
        route_status="pending",
        risk_status="not_analyzed",
        **trip.model_dump()
    )
    db["trips"].append(new_trip.model_dump())
    _trip_id_counter += 1
    return new_trip
