import time 
from flask import Flask


app  = Flask(__name__)

@app.route("/")
def hello_world():
    print("Request recieved. Starting 2 second work ")
    time.sleep(2)
    print("Work completed")
    return "<p>Hello World</p>"

if __name__ == "__main__":
    app.run(port=5000, threaded=False)
