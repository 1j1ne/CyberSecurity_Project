import requests
import time

target = input()

while True:

    starttime = time.time() 
    r = requests.get(target)

    if(r.status_code == 200) :
        currTime = time.time()
        elapsedTime = currTime - starttime
        print(f"Latancy: ", elapsedTime * 1000)
