class Animal:
    def speak(self):
        print("Animal speaks")

    def run(self):
        print("Animal running")


class Dog(Animal):
    def speak(self):
        print("Dog barks")


dg = Dog()
dg.speak()
