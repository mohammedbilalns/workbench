
def count_vowels(str: str) -> int: 
    return sum( 1 for char in str.lower() if char in "aeiou")


print(count_vowels("fsdfsqealkfsadfds"))