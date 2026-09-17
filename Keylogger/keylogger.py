from flask import Flask, render_template
from flask import request
import logging

logging.getLogger("werkzeug").setLevel(logging.ERROR)

app = Flask(__name__)
@app.route('/')
def html():
    return render_template('uw.html')

@app.route('/log',methods=['POST'])
def post():
    param = request.get_json()
    print(param)
    return "ok"
