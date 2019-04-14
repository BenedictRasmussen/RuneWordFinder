from models.mongoWrapper import Database
from bson.json_util import dumps

def findRunewords():
    collection = Database().runewords.find()
    return dumps(collection)
