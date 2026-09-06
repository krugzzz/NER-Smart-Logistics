# Temporary in-memory storage.
# TODO: Replace with PostgreSQL + PostGIS later.
# We will use SQLAlchemy for ORM when the database is set up.

db = {
    "vehicles": [],
    "trips": [],
    "incidents": []
}

def get_db():
    # Placeholder for database dependency injection
    return db
