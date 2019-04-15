import json
from flask import request
from models.mongoWrapper import Database
from bson.json_util import dumps

def find_runewords(request):
    runewords = Database().runewords.find()
    userRunes = json.loads(str(request.data, 'utf-8'))['runes']
    matchedRunewords = []

    for runeword in runewords:
        match = True
        for requiredRune in runeword['runes']:
            if  requiredRune not in userRunes:
                match = False
                break
        if match:
            matchedRunewords.append(runeword)
    return dumps(matchedRunewords)
