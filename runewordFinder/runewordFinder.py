from flask import Flask, render_template
from flask_pymongo import PyMongo
from models.mongoWrapper import findRunes

app = Flask(__name__)

@app.route("/")
def hello():
    findRunes()
    return render_template('index.html')

if __name__ == "__main__":
    # TODO this obviously needs changed for prod
    app.debug = True
    app.run()
