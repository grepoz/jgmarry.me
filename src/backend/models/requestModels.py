from pydantic import BaseModel


class LoginParams(BaseModel):
    familyPassword: str


class SignupParams(BaseModel):
    diet: str
    # tbc
