from flask import Flask, render_template
from flask.ext.pymongo import PyMongo
from flask import jsonify
<<<<<<< HEAD
import db
 
app = Flask(__name__)  
mongo = PyMongo(app)   

=======
 
app = Flask(__name__)  
mongo = PyMongo(app)    
 
>>>>>>> origin/master
@app.route('/')
def home():
  return render_template('cover_page.html')

@app.route('/dash')
def dash():
  return render_template('dash.html')

<<<<<<< HEAD
@app.route("/time/<name>/<time_from>/<time_to>")
def save_time_by_user(name, time_from, time_to):
  print("hw");
  return jsonify({ 'name': name, 'from': time_from, 'to': time_to})
=======
@app.route("/time/<time>/<user>")
def save_time_by_user(time, user):
  print("hw");
  return jsonify({'time': time, 'user': user})
>>>>>>> origin/master
 
if __name__ == '__main__':
  app.run(debug=True)