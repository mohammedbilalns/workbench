from pathlib import Path
from typing import Annotated

from pydantic import EmailStr, Field, SecretStr
from pydantic_settings import BaseSettings
from pydantic_settings.main import SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    app_name: str ="Settings demo"
    upload_dir : Path = Path("uploads")
    admin_email: EmailStr = "admin@example.com"
    api_key: SecretStr 
    port : Annotated[int, Field(ge=1, le=32)]


settings = Settings(
    
)

