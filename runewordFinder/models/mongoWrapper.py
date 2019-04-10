from pymongo import MongoClient

def findRunes():
    client = MongoClient("mongodb://localhost:27017/")
    db = client.RuneWordFinder
    collection = db.runes
    for rune in collection.find():
        print(rune)
