from fastapi import APIRouter
from typing import List
from app.models.incident import IncidentCreate, IncidentResponse
from app.database.database import db

router = APIRouter()
_incident_id_counter = 1

@router.get("/", response_model=List[IncidentResponse])
def get_incidents():
    return db["incidents"]

@router.post("/", response_model=IncidentResponse)
def create_incident(incident: IncidentCreate):
    global _incident_id_counter
    new_incident = IncidentResponse(
        id=_incident_id_counter,
        **incident.model_dump()
    )
    db["incidents"].append(new_incident.model_dump())
    _incident_id_counter += 1
    return new_incident
