from pydantic import BaseModel
from typing import Optional

class TripCreate(BaseModel):
    vehicle_id: int
    origin: str
    destination: str
    cargo_category: str
    cargo_priority: str

class TripResponse(TripCreate):
    id: int
    route_status: str
    risk_status: str
