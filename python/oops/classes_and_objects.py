class Person:
    def __init__(self, name , age):
        self.name = name 
        self.age = age 
    def greet(self):
        print(f"Hello, my name is {self.name}")
        print(f"My age is {self.age}")
    
    @classmethod
    def class_method(cls):
        print("class",cls)

    @staticmethod
    def static_method():
        print("static")

p1 = Person("bilal","25")
p1.greet()

p1.class_method()
p1.static_method()