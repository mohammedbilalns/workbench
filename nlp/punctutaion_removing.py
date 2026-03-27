import string 

def remove_punctuation(text):
    return text.translate(str.maketrans('', '', string.punctuation))
text = "Hello, wold! Let's clean this text"
clean_text = remove_punctuation(text)
print("Before:", text)
print("After: ", clean_text)
