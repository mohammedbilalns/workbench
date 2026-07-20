from typing import TypedDict, cast

import requests

base_url = "https://pokeapi.co/api/v2"

class Pokemon(TypedDict):
    id: int 
    name: str
    height: int
    weight: int 

def get_pokemaon_info(name: str):
    url = f"{base_url}/pokemon/{name}"
    response: requests.Response = requests.get(url)
    print(response)

    if not response.ok:
        print(f"Error: {response.status_code}")
        return None
    data : Pokemon = cast(Pokemon, response.json())
    print(data)

pokemon_name = "pikachu"
get_pokemaon_info(pokemon_name)
