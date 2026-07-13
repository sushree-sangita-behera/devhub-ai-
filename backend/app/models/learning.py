from sqlalchemy import Column, String, DateTime, Boolean, Integer, Float, Text, JSON, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import uuid
from app.core.database import Base


class LearningSkill(Base):
    __tablename__ = "learning_skills"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"))
    name = Column(String(100), nullable=False)
    category = Column(String(100), nullable=True)
    level = Column(String(50), default="Beginner")  # Beginner, Intermediate, Advanced
    progress = Column(Float, default=0)  # 0-100
    hours_spent = Column(Float, default=0)
    resources = Column(JSON, default=[])  # Array of resource URLs
    notes = Column(Text, nullable=True)
    target_date = Column(DateTime, nullable=True)
    completed = Column(Boolean, default=False)
    completed_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())
    
    user = relationship("User", backref="learning_skills")


class LearningActivity(Base):
    __tablename__ = "learning_activities"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"))
    skill_id = Column(UUID(as_uuid=True), ForeignKey("learning_skills.id", ondelete="CASCADE"))
    activity_type = Column(String(50))  # course, video, practice, quiz
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    duration_minutes = Column(Integer, default=0)
    completed = Column(Boolean, default=False)
    metadata = Column(JSON, default={})
    created_at = Column(DateTime, server_default=func.now())
    
    user = relationship("User", backref="learning_activities")
    skill = relationship("LearningSkill", backref="activities")