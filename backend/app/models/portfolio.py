from sqlalchemy import Column, String, DateTime, Boolean, Integer, Text, JSON, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import uuid
from app.core.database import Base


class Portfolio(Base):
    __tablename__ = "portfolios"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), unique=True)
    title = Column(String(255), nullable=False)
    subtitle = Column(String(255), nullable=True)
    bio = Column(Text, nullable=True)
    avatar_url = Column(String(500), nullable=True)
    cover_image = Column(String(500), nullable=True)
    skills = Column(JSON, default=[])  # Array of skills
    experiences = Column(JSON, default=[])  # Array of experience objects
    education = Column(JSON, default=[])  # Array of education objects
    certifications = Column(JSON, default=[])  # Array of certifications
    social_links = Column(JSON, default={})  # Social media links
    is_public = Column(Boolean, default=True)
    theme = Column(String(50), default="default")
    custom_css = Column(Text, nullable=True)
    views_count = Column(Integer, default=0)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())
    
    # Relationships
    user = relationship("User", backref="portfolio")