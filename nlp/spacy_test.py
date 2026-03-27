import spacy

nlp = spacy.load("en_core_web_sm")

def spacy_tokenize(text):
    doc = nlp(text)

    words = [token.text for token in doc]
    sentences = [sent.text for sent in doc.sents]

    return words, sentences


sample_text = "Tokenization helps break text into manageable units."
words, sentences = spacy_tokenize(sample_text)

print("Words:", words)
print("Sentences:", sentences)
