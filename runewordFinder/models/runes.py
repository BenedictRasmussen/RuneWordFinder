from models.mongoWrapper import Database
from bson.json_util import dumps

def find_runes():
    return dumps(Database().runes.find())
