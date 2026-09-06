from pydantic import BaseModel

class IncidentCreate(BaseModel):
    incident_type: str
    location: str
    severity: str
    description: str

class IncidentResponse(IncidentCreate):
    id: int
