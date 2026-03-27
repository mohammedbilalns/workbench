import nltk
from nltk.tokenize import sent_tokenize, word_tokenize, WordPunctTokenizer
from nltk.tokenize import TreebankWordDetokenizer, RegexpTokenizer 

nltk.download("punkt")
nltk.download("punkt_tab")

text = "NLTK is a great NLP toolkit. It makes processing text easy!."
sentences = sent_tokenize(text)
print(sentences)
sentence = "Tokenization is easy with NLTK's word tokenize."
words = word_tokenize(sentence)
print(words)

tokenizer = WordPunctTokenizer()
tokens = tokenizer.tokenize("Don't split contractions. E-mails: hello@example.com!")
print(tokens)

treeebankenizer = TreebankWordDetokenizer()
treebanktokens = treeebankenizer.tokenize("Have a look at NLTK's tokenizers")
print(treebanktokens)

regexTokenizer = RegexpTokenizer(r'\w+')
tokens = tokenizer.tokenize("Custom rule: keep only words & numbers, drop puntctations")
print(tokens)
