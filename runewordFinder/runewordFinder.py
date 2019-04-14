from flask import Flask, render_template
from models.runes import findRunes
from models.runewords import findRunewords

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/v1/runes")
def runes():
    return findRunes()

@app.route("/api/v1/runewordSearch")
def runewordSearch():
    return findRunewords()

if __name__ == "__main__":
    # TODO this obviously needs changed for prod
    app.debug = True
    app.run()
