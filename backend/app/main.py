from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import vehicles, trips, incidents, auth

app = FastAPI(
    title="NER Smart Logistics API",
    description="Backend API for the AI-Based Smart Logistics and Accessibility Intelligence Platform for the North Eastern Region.",
    version="0.1.0"
)

# Enable CORS for the existing Vite frontend running on localhost:5173
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(vehicles.router, prefix="/api/vehicles", tags=["Vehicles"])
app.include_router(trips.router, prefix="/api/trips", tags=["Trips"])
app.include_router(incidents.router, prefix="/api/incidents", tags=["Incidents"])
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])

@app.get("/api/health", tags=["Health"])
def health_check():
    return {
        "status": "ok",
        "service": "NER Smart Logistics Backend"
    }
