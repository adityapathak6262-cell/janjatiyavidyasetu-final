from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.api import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    description="Policy-to-Workflow Intelligence Platform for Ministry of Tribal Affairs (MoTA) Scholarships & Fellowships",
    version="1.0.0",
)

# Set CORS (allow all origins for seamless Vercel preview & production deployments)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/api/v1/auth/demo-users", tags=["Auth"])
async def get_demo_users():
    return [
        {
            "id": "11111111-1111-1111-1111-111111111111",
            "name": "Dr. Rameshwar Gond",
            "email": "mota.admin@gov.in",
            "role": "SUPER_ADMIN",
            "institution": "Ministry of Tribal Affairs, Shastri Bhawan",
            "state": "National / Central MoTA"
        },
        {
            "id": "22222222-2222-2222-2222-222222222222",
            "name": "Sunita Marandi",
            "email": "sunita.scholar@tribal.ac.in",
            "role": "STUDENT",
            "institution": "Ranchi University",
            "state": "Jharkhand"
        },
        {
            "id": "33333333-3333-3333-3333-333333333333",
            "name": "Prof. Alok Lakra",
            "email": "verifier@ranchiuniv.ac.in",
            "role": "INSTITUTION_VERIFIER",
            "institution": "Ranchi University",
            "state": "Jharkhand"
        },
        {
            "id": "44444444-4444-4444-4444-444444444444",
            "name": "P. K. Dora",
            "email": "officer.mota@gov.in",
            "role": "MOTA_OFFICER",
            "institution": "MoTA Eastern Regional Directorate",
            "state": "Odisha"
        }
    ]

@app.get("/health", tags=["Health"])
async def health_check():
    return {
        "status": "HEALTHY",
        "service": "Janjatiya Vidya Setu (JVS) Backend",
        "version": "1.0.0",
        "database": "PostgreSQL 16 Async",
    }

@app.get("/ready", tags=["Health"])
async def readiness_check():
    return {"status": "READY", "ready": True}
