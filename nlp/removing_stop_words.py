import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string

nltk.download("stopwords")
nltk.download("punkt")
nltk.download("wordnet")
nltk.download('omw-1.4') 

text = "This is a sample sentence showing stopword removal."

stop_words = set(stopwords.words("english"))

tokens = word_tokenize(text.lower())

filtered_tokens = [
    word for word in tokens 
    if word not in stop_words and word not in string.punctuation
]

print("Original:", tokens)
print("Filtered:", filtered_tokens)
