from pymongo import MongoClient as PyMongoClient

class MongoClient():
    def __init__(self):
        self._client = PyMongoClient("mongodb://localhost:27017/").RuneWordFinder

    def find_runes(self):
        return self._client.runes.find()

    def find_runewords(self):
        return self._client.runewords.find()
