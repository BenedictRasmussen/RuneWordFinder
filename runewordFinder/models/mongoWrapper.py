from pymongo import MongoClient

_client = MongoClient("mongodb://localhost:27017/").RuneWordFinder

def Database():
    return _client
