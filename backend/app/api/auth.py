from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    role: str

@router.post("/login")
def login(request: LoginRequest):
    # TODO: Implement real JWT authentication later
    return {
        "message": "Temporary login successful",
        "role": request.role
    }
