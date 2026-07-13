from sqlalchemy import Column, String, DateTime, Boolean, Integer, Text, JSON, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import uuid
from app.core.database import Base


class Resume(Base):
    __tablename__ = "resumes"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"))
    title = Column(String(255), nullable=False)
    template = Column(String(50), default="modern")
    content = Column(JSON, nullable=False)  # Full resume content
    version = Column(Integer, default=1)
    is_public = Column(Boolean, default=False)
    is_default = Column(Boolean, default=False)
    download_count = Column(Integer, default=0)
    file_url = Column(String(500), nullable=True)  # Generated PDF/Word URL
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())
    
    user = relationship("User", backref="resumes")