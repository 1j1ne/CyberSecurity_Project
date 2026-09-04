from flask import Flask
import time
import logging

logging.getLogger("werkzeug").setLevel(logging.ERROR)

app = Flask(__name__)



starttime = time.time()

cnt = 0
previousCnt = 0

@app.route("/")
def countVisit():
    global cnt
    global starttime
    global previousCnt
    cnt +=1
    currTime = time.time()
    elapsedTime = currTime - starttime
    if(elapsedTime >= 1) :
        currentCnt = cnt
        requestsThisSecond = currentCnt - previousCnt
        previousCnt = currentCnt
        print(f"Request per Sec:", requestsThisSecond)
        starttime = time.time()
        return ""
    return "OK"



app.run(host='0.0.0.0' ,port='8080')
