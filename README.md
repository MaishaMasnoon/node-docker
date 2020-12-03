# node-docker
requiremetns:
Node.js version 12.18 or later.
Download and install Docker Desktop, if you don't have it already.

The application that  have created displays data from a JASON data model which contains a list of IoT device records. I have defined four different endpoint to pull data from.
the endpoints are 
/IoTDeviceList
/IoTDeviceList/id
/IoTDeviceList/id/PurchaseHistory
/IoTDeviceList/id/PurchaseHistory/OrderId

Setting up the docker container:
Download the node-docker repository
Go to the directory that you have downloaded
Open the command promt and the run the command "npm insall" to install the dependencies
Also run "npm install express --save" to install the express and save it in the dependencies list
Then you can run "node server.js" to see if the server is working

Build the image for the docker container:
run "docker build --tag [docker container name] ."  
Then run "docker run --publish 8081:8081 [docker container name]"
you will see that you have not returned back to the command promt. That is because this application is a REST server and will run in a loop waiting for incoming requests 

Sending get requests:
we can see if the server is working properly in the container by sending get requests. Using get requests we can get data from different end points. If we get the data then we can say that the server is working properly
Open another command promt in the same directory while the previous one, where the server is running, still open. From this new command pormpt we will send a get request using curl command.
run "curl http://127.0.0.1:8081/IoTDeviceList" to get a list of IoT device records
We will see a list of JASON data sent from the server in the command prompt
Now in the browser if you enter "http://127.0.0.1:8081/index.html" it will load the webpage I have created to display the data 
If you click the first button, The table will display the data came from the endpoint "http://127.0.0.1:8081/IoTDeviceList"
run "curl http://127.0.0.1:8081/IoTDeviceList/1" in the command prompt (1 is he vlaue of the id. You can put other values too.)
in the webpage hit the second button which will load the data came form the second endpoint.
