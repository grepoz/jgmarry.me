import json
from json import JSONEncoder


class Family:
    def __init__(self, id, password):
        self.id = id
        self.members = []
        self.password = password
        self.needs_accomodation = False

    def add_member(self, member):
        self.members.append(member)

    def __iter__(self):
        yield from {
            "members": self.members,
            "password": self.password,
            "needs_accomodation": self.needs_accomodation
        }.items()

    def __str__(self):
        return json.dumps(dict(self), cls=MyEncoder, ensure_ascii=False)

    def __repr__(self):
        return self.__str__()


# encoder needed for serialization to JSON
class MyEncoder(JSONEncoder):
    def default(self, obj):
        return obj.__dict__

