from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from motor.motor_asyncio import AsyncIOMotorClient
from typing import AsyncGenerator, Generator
import redis.asyncio as redis
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

# PostgreSQL
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
    echo=settings.DEBUG,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# MongoDB
mongo_client: AsyncIOMotorClient = None
mongo_db = None


async def init_mongo():
    """Initialize MongoDB connection."""
    global mongo_client, mongo_db
    if not mongo_client:
        mongo_client = AsyncIOMotorClient(settings.MONGODB_URL)
        mongo_db = mongo_client[settings.MONGODB_DB_NAME]
        logger.info("MongoDB initialized")
    return mongo_db


async def close_mongo():
    """Close MongoDB connection."""
    global mongo_client
    if mongo_client:
        mongo_client.close()
        logger.info("MongoDB closed")


# Redis
redis_client: redis.Redis = None


async def init_redis():
    """Initialize Redis connection."""
    global redis_client
    if not redis_client:
        redis_client = redis.from_url(
            settings.REDIS_URL,
            encoding="utf-8",
            decode_responses=True,
        )
        logger.info("Redis initialized")
    return redis_client


async def close_redis():
    """Close Redis connection."""
    global redis_client
    if redis_client:
        await redis_client.close()
        logger.info("Redis closed")


async def init_db():
    """Initialize all database connections."""
    try:
        # PostgreSQL
        Base.metadata.create_all(bind=engine)
        logger.info("PostgreSQL initialized")
        
        # MongoDB
        await init_mongo()
        
        # Redis
        await init_redis()
        
        logger.info("All databases initialized successfully")
    except Exception as e:
        logger.error(f"Database initialization failed: {e}")
        raise


async def close_db():
    """Close all database connections."""
    await close_mongo()
    await close_redis()
    logger.info("All database connections closed")


def get_db() -> Generator[Session, None, None]:
    """Get PostgreSQL database session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def get_mongo_db():
    """Get MongoDB database instance."""
    return await init_mongo()


async def get_redis():
    """Get Redis client instance."""
    return await init_redis()