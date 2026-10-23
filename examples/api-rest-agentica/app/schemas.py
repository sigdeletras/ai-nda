from pydantic import BaseModel, ConfigDict, Field, StringConstraints
from typing import Annotated


Username = Annotated[str, StringConstraints(strip_whitespace=True, min_length=3, max_length=80)]
Password = Annotated[str, StringConstraints(min_length=12, max_length=128)]


class UserCreate(BaseModel):
    username: Username
    password: Password


class UserRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    username: str


class ProjectCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    description: str = Field(default="", max_length=4000)


class ProjectUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=120)
    description: str | None = Field(default=None, max_length=4000)


class ProjectRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: str
    owner_id: int
