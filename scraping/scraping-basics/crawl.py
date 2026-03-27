from urllib.parse import urlparse

def normalize_url(url):
    parsed = urlparse(url)

    host = parsed.netloc.lower()
    path = parsed.path.rstrip("/")

    return f"{host}{path}"

