from models.database_wrapper import database
from bson.json_util import dumps
from flask import request

def find_runes(request):
    return dumps(database(request).find_runes())
