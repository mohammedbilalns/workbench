from unicodedata import name


x: int = 10 
weather: str = "cloudy"
data : dict[str,int] = {'bob':1, 'james': 2}
elements : list[str] = ['a','b','c']


def get_data() -> dict[str ,  int]:
    return {'a':1, 'b':2}

def greet_people(people: list[str] ) -> None:
    for person in people:
        print(f"Hello, {person.capitalize()}")


class Fruit:
    name: str = "fsfsf"
    ...

fruit : Fruit = Fruit(
)

