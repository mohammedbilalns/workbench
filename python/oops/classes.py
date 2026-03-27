
class Dog:
    species = "Canine"

    def __init__(self, name , age):
        self.name = name
        self.age = age
    def __str__(self): # used to define custom string representation 
        return f"{self.name} is {self.age} years old"
dog1 = Dog("Buddy", 3)
print(dog1.name)
print(dog1.species)
print(dog1)
