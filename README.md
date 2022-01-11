# Todolist

<i>Link</i>- <a href="https://guarded-savannah-20838.herokuapp.com/">Click Here!</a>

Its a <b>TodoList</b> webapp where people can make a list of tasks and edit it accordingly.<br>

## Tech-Stack
<li><b>NodeJS</b>- For rendering the Server side handling of GET and POST requests and connecting to DB</li>
<li><b>MongoDB</b>- The User data are saved in a Mongo Database deployed on AWS Bucket-S3 via MongoDB</li>
<li><b>ExpressJS</b>- For passing the dta from user to DB and vice versa.</li>
<li><b>EJS</b>- For rendering the data from user to DB and vice versa on the webpages.</li>
<li><b>NPM Packages</b>- Various other NPM packages like Body-Parser etc</li>

## Running locally
- Clone the Repo</li>
- Move to the Dir</li>
- Run the below commands:
- ```npm i```
- ```node app.js```
- Project is served on http://localhost:3000/

## Docker Setup:
- First make sure your laptop has Docker
- Open terminal, run ```docker pull kitarp29/todolist:1.0```
- Run ```docker run -e  DB_URL -d --name pk -p 3000:3000 kitarp29/todolist:1.0```
- The API is running at  [http://localhost:3000/](http://localhost:3000/)
