from flask import Flask, render_template
from flask.ext.pymongo import PyMongo
from flask import jsonify
import db
 
app = Flask(__name__)  
mongo = PyMongo(app)      
 
@app.route('/')
def home():
  return render_template('cover_page.html')

@app.route('/dash')
def dash():
  return render_template('dash.html')

@app.route("/time/<name>/<time_from>/<time_to>")
def save_time_by_user(name, time_from, time_to):
  print("hw");
  return jsonify({ 'name': name, 'from': time_from, 'to': time_to})
 
if __name__ == '__main__':
  app.run(debug=True)