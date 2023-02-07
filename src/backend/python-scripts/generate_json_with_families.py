# modules
from datetime import datetime
import secrets
import string
import json
import os
from config import GUESTS_FILEPATH, FAMILIES_FILEPATH, PASSWORDS_FILEPATH


from models.family import Family, MyEncoder
from models.member import Member

NUMBER_OF_GUESTS = 50
PASSWORD_LENGTH = 6
ALPHABET = string.ascii_letters + string.digits
passwords = []


# functions
def generate_password():

    password = ''
    is_password_unique = False
    while not is_password_unique:
        password = ''.join(secrets.choice(ALPHABET)
                           for _ in range(PASSWORD_LENGTH))
        if password not in passwords:
            passwords.append(password)
            is_password_unique = True

    return password


def create_families_from_guests_list(filename=GUESTS_FILEPATH):
    with open(filename, 'r') as file:
        lines = file.read().splitlines()

    families = []
    reading_new_family = True
    simple_id = 0
    family: Family = Family(None, None)

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


def add_test_family_with_test_user(id, f):
    m = Member("testowy", "gosc")
    admin_password = os.getenv("FIREBASE_ADMIN_PASSWORD") if os.getenv(
        "FIREBASE_ADMIN_PASSWORD") is not None else "123456"
    passwords.append(admin_password)
    family = Family(id, admin_password)
    family.add_member(m)
    f.append(family)
    return f


def get_today():
    now = datetime.now()

    return now.strftime("%d-%m-%Y_%H-%M-%S")


def combine_filename(base_filename):
    return f"{get_today()}_{base_filename}"


if __name__ == "__main__":
    families = create_families_from_guests_list()

    with open(combine_filename(FAMILIES_FILEPATH), "w") as file:
        json.dump({"families": families}, file, cls=MyEncoder)

    with open(combine_filename(PASSWORDS_FILEPATH), "w") as file:
        file.write('\n'.join(passwords))
