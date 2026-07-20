from typing import override


class Book:
    def __init__(self, title: str , author: str , num_pages : int): # constructor 
        self.title : str = title
        self.author : str = author
        self.num_pages : int = num_pages

    @override
    def __str__(self) -> str: # override the behaviour when printing 
        return f"{self.title} by {self.author}"

    @override
    def __eq__(self, other: object)  -> bool: # overridethe behaviour for = comparison operator  
        if not isinstance(other,Book):
            return NotImplemented
        return self.title == other.title and self.author == other.author

    def __lt__(self, other:object) -> bool: # override the behaviour when < comparison operator
        if not isinstance(other, Book):
            return NotImplemented
        return self.num_pages < other.num_pages

    def __add__(self, other: object) -> int : # override + behaviour 
        if not isinstance(other, Book):
            return NotImplemented
        return self.num_pages + other.num_pages

    def __contains__(self, keyword: str): # overrid the behaviour of in operation 
        return keyword in self.title or keyword in self.author

    def __getitem__(self, key: str):
        if key == "title":
            return self.title
        elif key == "author":
            return self.author




book1= Book("The hobbit", "J RR tokein", 332)
book2 = Book("The lion the witch and the wardrobe", "c s lewis", 323)

print(book1 == 32)
print(book2 < book1)

print("hobbit" in book1)
