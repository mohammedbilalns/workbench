
import this
from typing import NamedTuple


class Color(NamedTuple):
    red: int 
    green: int 
    blue : int 

   
    def __new__(cls, iterable: Iterable[_T_co] = ..., /) -> Self:
        return super().__new__(iterable)



color = Color(red=212, green=123, blue=234)
