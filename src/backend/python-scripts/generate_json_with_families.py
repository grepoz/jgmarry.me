# modules
from json import JSONEncoder
import secrets
import string
import json
from enum import Enum
import os


# constants
NUMBER_OF_GUESTS = 50
PASSWORD_LENGTH = 6
ALPHABET = string.ascii_letters + string.digits  # + string.punctuation
passwords = []


# enum
class Diet:
    BASIC = "podstawowa"
    WEGETARIAN = "wegetariańska"
    WEGAN = "wegańska"
    LACTOSE_FREE = "bez laktozy"
    GLUTEN_FREE = "bez glutenu"


# model classes
class Member:
    def __init__(self, name, surname):
        self.name = name
        self.surname = surname
        self.has_confirmed = False
        self.diet = Diet.BASIC


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


# encoder needed for serialiation to JSON
class MyEncoder(JSONEncoder):
    def default(self, obj):
        return obj.__dict__


# functions
def generate_password():
    is_password_unique = False
    while not is_password_unique:
        password = ''.join(secrets.choice(ALPHABET)
                           for _ in range(PASSWORD_LENGTH))
        if password not in passwords:
            passwords.append(password)
            is_password_unique = True

    return password


def create_families_from_guests_list(filename="src/backend/data/guests.txt"):
    with open(filename, 'r') as file:
        lines = file.read().splitlines()

    families = []
    reading_new_family = True
    simple_id = 0

    for line in lines:
        if line != "":
            if reading_new_family:
                family = Family(simple_id, generate_password())
                reading_new_family = False

            person_data = line.split()
            member = Member(person_data[0], person_data[1])
            family.add_member(member)
        else:
            families.append(family)
            simple_id += 1
            reading_new_family = True

    # temporary
    families = add_test_family_with_test_user(simple_id, families)

    return families


# temporary function
def add_test_family_with_test_user(id, f):
    m = Member("testowy", "gosc")
    admin_password = os.getenv("FIREBASE_ADMIN_PASSWORD") if os.getenv(
        "FIREBASE_ADMIN_PASSWORD") is not None else "admin1"
    print(admin_password)
    passwords.append(admin_password)
    family = Family(id, admin_password)
    family.add_member(m)
    f.append(family)
    return f


# main function
if __name__ == "__main__":
    print(os.getcwd())
    families = create_families_from_guests_list()

    with open("src/backend/data/families.json", "w") as file:
        json.dump({"families": families}, file, cls=MyEncoder)

    with open("src/backend/data/passwords.txt", "w") as file:
        file.write('\n'.join(passwords))
