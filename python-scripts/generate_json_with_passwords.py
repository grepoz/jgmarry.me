# modules
from json import JSONEncoder
import secrets
import string
import json

# constants
NUMBER_OF_GUESTS = 50
PASSWORD_LENGTH = 6
ALPHABET = string.ascii_letters + string.punctuation + string.digits
passwords = []


class MyEncoder(JSONEncoder):
    def default(self, obj):
        return obj.__dict__


class Family:
    def __init__(self, password):
        self.members = []
        self.password = password

    def add_member(self, member):
        self.members.append(member)

    def __iter__(self):
        yield from {
            "members": self.members,
            "password": self.password,
        }.items()

    def __str__(self):
        return json.dumps(dict(self), cls=MyEncoder, ensure_ascii=False)

    def __repr__(self):
        return self.__str__()
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


def create_families_from_guests_list(filename="python-scripts/data/guests.txt"):
    with open(filename, 'r') as file:
        lines = file.read().splitlines()

    families = []
    reading_new_family = True

    for line in lines:
        if line != "":
            if reading_new_family:
                family = Family(generate_password())
                reading_new_family = False

            family.add_member(line)
        else:
            MyEncoder().encode(family)
            families.append(family)
            reading_new_family = True

    return families


# main function
if __name__ == "__main__":

    # passwords = []
    # for i in range(NUMBER_OF_GUESTS):
    #     passwords.append(generate_password())

    # print(passwords)

    # with open('python-scripts/data/data.json', 'w') as file:
    #     json.dump(passwords, file)

    families = create_families_from_guests_list()
    with open("python-scripts/data/families.json", "w") as file:
        json.dump({"families": families}, file, cls=MyEncoder)
