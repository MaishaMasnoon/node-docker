# node-docker
requiremetns:
Node.js version 12.18 or later.
Download and install Docker Desktop, if you don't have it already.

The application that I have created displays data from a JASON data model which contains a list of IoT device records. I have defined four different endpoints to pull data from.
the endpoints are 
1) /IoTDeviceList
2) /IoTDeviceList/id
3) /IoTDeviceList/id/PurchaseHistory
4) /IoTDeviceList/id/PurchaseHistory/OrderId

Setting up the docker container:

Download the node-docker repository.
Go to the directory that you have downloaded.
Open the command promt and run the command "npm install" to install the dependencies.
Also run "npm install express --save" to install the express and save it in the dependencies list.
Then you can run "node server.js" to see if the server is working.
Press control c to get back to the command prompt.

Build the image for the docker container:

run "docker build --tag node-docker-main ."  
Then run "docker run --publish 8081:8081 node-docker-main"
You will see that you have not returned back to the command promt. That is because this application is a REST server and will run in a loop waiting for incoming requests 

Sending get requests:

we can see if the server is working properly in the container by sending get requests. Using get requests we can get data from different end points. If we get the data then we can say that the server is working properly.
Open another command promt in the same directory while the previous one, where the server is running, still open. From this new command pormpt we will send a get request using curl command.
run "curl http://127.0.0.1:8081/IoTDeviceList" to get a list of IoT device records.
We will see a list of JASON data sent from the server in the command prompt.
Now in the browser if you enter "http://127.0.0.1:8081/index.html" it will load the webpage I have created to display the data .
If you click the button called collection of IoT Devices, The table will display the data came from the endpoint "http://127.0.0.1:8081/IoTDeviceList"
Run "curl http://127.0.0.1:8081/IoTDeviceList/1" in the command prompt (1 is he vlaue of the id. You can put other values of id too(e.g. 1, 2, 3).)
Tn the webpage hit the button called IoT Device corresponds to an ID, which will load the data came form the second endpoint.
Respectively test the other two enpoints.
