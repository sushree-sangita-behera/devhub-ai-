from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth,
    projects,
    portfolio,
    github,
    resume,
    learning,
    dashboard,
)

router = APIRouter()

# Include all endpoint routers
router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
router.include_router(projects.router, prefix="/projects", tags=["Projects"])
router.include_router(portfolio.router, prefix="/portfolio", tags=["Portfolio"])
router.include_router(github.router, prefix="/github", tags=["GitHub"])
router.include_router(resume.router, prefix="/resume", tags=["Resume"])
router.include_router(learning.router, prefix="/learning", tags=["Learning"])
router.include_router(dashboard.router, prefix="/dashboard", tags=["Dashboard"])