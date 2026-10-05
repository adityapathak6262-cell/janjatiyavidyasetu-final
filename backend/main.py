"""
FastAPI Entrypoint for Vercel Serverless Function & Local Deployment
"""
from app.main import app

__all__ = ["app"]
