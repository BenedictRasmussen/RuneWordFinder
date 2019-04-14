from models.mongoWrapper import Database
from bson.json_util import dumps

def findRunes():
    collection = Database().runes.find()
    return dumps(collection)
