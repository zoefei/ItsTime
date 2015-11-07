from flask import Flask, render_template
from flask.ext.pymongo import PyMongo
from flask import jsonify
 
app = Flask(__name__)  
mongo = PyMongo(app)    
 
@app.route('/')
def home():
  return render_template('cover_page.html')

@app.route('/dash')
def dash():
  return render_template('dash.html')

@app.route("/time/<time>/<user>")
def save_time_by_user(time, user):
  print("hw");
  return jsonify({'time': time, 'user': user})
 
if __name__ == '__main__':
  app.run(debug=True)