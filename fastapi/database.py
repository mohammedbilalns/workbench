from sqlalchemy.orm import sessionmaker

db_url = "postgresql://neondb_owner:npg_1MR2UpBvPuzF@ep-summer-unit-aofyq15k-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
engine = crete_engine()
SessionLocal = sessionmaker(autocommit=False, autoflush=False)
