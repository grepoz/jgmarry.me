# modules
import secrets
import string
import json

# constants
NUMBER_OF_GUESTS = 50
PASSWORD_LENGTH = 6
ALPHABET = string.ascii_letters + string.punctuation + string.digits


class Family:
    def __init__(self, id=0):
        self.id = id
        self.members = []
        self.password = ""

    def add_member(self, member):
        self.members.append(member)

# functions


def generate_password(): return ''.join(secrets.choice(ALPHABET)
                                        for _ in range(PASSWORD_LENGTH))


def read_guests(filename="data/guests.txt"):
    with open(filename, 'r') as file:
        lines = file.readlines()

    families = []
    reading_new_family = True
    cnt = 0
    family = Family()

    for line in lines:
        if line != "":
            if reading_new_family:
                family = Family(cnt)
                reading_new_family = False

            family.add_member(line)

        else:
            reading_new_family = True


# main function
if __name__ == "__main__":

    passwords = []
    for i in range(NUMBER_OF_GUESTS):
        passwords.append(generate_password())

    print(passwords)

    with open('python-scripts/data/data.json', 'w') as file:
        json.dump(passwords, file)
