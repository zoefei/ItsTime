import urllib
from flask.ext.pymongo import PyMongo
from pymongo import MongoClient

AWS_IP_ADDRESS = "127.0.0.1"

try:
    url='mongodb://localhost:27017'
    client = MongoClient(url)
    db = client["syclops"]
except urllib.error.HTTPError:
    url = 'mongodb://' + AWS_IP_ADDRESS + ':27017'
    client = pymongo.MongoClient(url)
    db = client["itstime"]
except:
    print("Mongo client initialize failed!")
    db = None

TOP_IMAGE_COLLECTION = "events"


def get_collections():
    return db.collection_names() 
 