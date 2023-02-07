from models.diets import Diet


class Member:
    def __init__(self, name, surname):
        self.name = name
        self.surname = surname
        self.has_confirmed = False
        self.diet = Diet.BASIC
