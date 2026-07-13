from sqlalchemy import Column, String, DateTime, Boolean, Integer, Text, JSON, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import uuid
from app.core.database import Base


class Project(Base):
    __tablename__ = "projects"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"))
    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, nullable=False)
    description = Column(Text, nullable=True)
    technologies = Column(JSON, default=[])  # Array of technologies
    github_url = Column(String(500), nullable=True)
    live_url = Column(String(500), nullable=True)
    demo_url = Column(String(500), nullable=True)
    cover_image = Column(String(500), nullable=True)
    screenshots = Column(JSON, default=[])  # Array of image URLs
    readme_content = Column(Text, nullable=True)
    readme_generated = Column(Boolean, default=False)
    is_public = Column(Boolean, default=True)
    is_featured = Column(Boolean, default=False)
    views_count = Column(Integer, default=0)
    stars_count = Column(Integer, default=0)
    forks_count = Column(Integer, default=0)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())
    
    # Relationships
    user = relationship("User", backref="projects")


class ProjectActivity(Base):
    __tablename__ = "project_activities"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id", ondelete="CASCADE"))
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"))
    activity_type = Column(String(50))  # view, star, fork, comment
    metadata = Column(JSON, default={})
    created_at = Column(DateTime, server_default=func.now())