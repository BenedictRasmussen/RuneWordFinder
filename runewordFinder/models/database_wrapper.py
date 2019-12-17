import logging
from pymongo import MongoClient
from flask import request
import models.client.mongo_client as mongo_client

_mongo_client = None
_dynamo_client = None

def database(request):
    _is_local_instance = True if 'localhost' in request.host or '127.0.0.1' in request.host else False

    if _is_local_instance:
        return mongo_client.MongoClient()
    else:
        logging.ERROR("No database client found: request.host = " + request.host)
    # elif not _isLocalInstance and _dynamoClient is None
    #     #TODO create dynamoClient
    #     return None
