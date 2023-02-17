import json

from models.diets import Diet
from models.family import MyEncoder


class Member:
    def __init__(self, name, surname):
        self.name = name
        self.surname = surname
        self.has_confirmed = False
        self.diet = Diet.BASIC

    def __iter__(self):
        yield from {
            "name": self.name,
            "surname": self.surname,
            "has_confirmed": self.has_confirmed,
            "diet": self.diet
        }.items()

    def __str__(self):
        return json.dumps(dict(self), cls=MyEncoder, ensure_ascii=False)

    def __repr__(self):
        return self.__str__()
