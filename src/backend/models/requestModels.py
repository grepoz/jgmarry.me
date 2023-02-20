import json
from typing import List
from pydantic import BaseModel

from models.family import MyEncoder


class MemberModel(BaseModel):
    name: str
    surname: str
    has_confirmed: bool
    diet: str


class LoginParams(BaseModel):
    familyPassword: str


class SignupParams(BaseModel):
    id: int
    members: List[MemberModel]
    needs_accomodation: bool


    def __iter__(self):
        yield from {
            "id": self.id,
            "members": self.members,
            "needs_accomodation": self.needs_accomodation
        }.items()

    def __str__(self):
        return json.dumps(dict(self), cls=MyEncoder, ensure_ascii=False)

    def __repr__(self):
        return self.__str__()
