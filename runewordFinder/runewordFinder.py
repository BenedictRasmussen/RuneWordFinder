from flask import Flask, render_template, request
from models.runes import find_runes
from models.runewords import find_runewords

app = Flask(__name__)

# index returns the root html
@app.route("/")
def index():
    return render_template('index.html')

# runes returns all runes from the database
@app.route("/api/v1/runes")
def runes():
    return find_runes()

# runeword_search returns a list of runewords that may be made with the runes provided in the body of the request
@app.route("/api/v1/runewordSearch", methods=['POST'])
def runeword_search():
    return find_runewords(request)

if __name__ == "__main__":
    # TODO this obviously needs changed for prod
    app.debug = True
    app.run()
