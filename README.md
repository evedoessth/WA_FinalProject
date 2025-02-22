# Web Applications Final Project - Eve Schütze


## Setup

 1. Download the zip file & unpack it
 2. Open terminal from *finalProject_frontend*
 3. Execute `node server.js`
 4. Open browser on `localhost:3000`
 5. To close the server simply press `Ctr + C` in the terminal

 >There is an issue where the server cannot find the favicon and crashes upon loading or reloading a page! It works fine after a restart.


## Plan
Create a planner for Pen & Paper Campaigns and sessions based on a previous project where the design and layout for a mobile version had already been created. 

### Goals:

- Adapt the design for a desktop version
- Add a backend for login, database for campaigns, etc.
- Create the frontend without a framework


## Execution
This project is entirely hosted over localhost using REST API and Express. This includes css, html, js and image files. Other data, like json files or a database was not able to be created. As I had never worked with the backend before, I had to decide where to focus my learning and time on and decided to drop the database.

Campaigns and sessions are dynamically displayed on the respective dashboards. Arrays of objects have been used to store the data as a replacement for json files, as their import over the REST API or normal import did not work in time.

The pages are styled as intended after the established [project](https://www.figma.com/design/ApqVE9q6eDFiFAf1T3nSAH/Pen-%26-Paper-Planner?node-id=0-1&t=R0OlS1NyeE5ouH4Y-1). 


## Missing Features
- Creating Campaigns & Sessions from forms
- Data interaction between the frontend and backend to send new campaigns, session and users, and get existing ones
- Login functionality

Most of these features are missing because I couldn't figure out how to use REST to recieve data after hosting all of the files over the server. As a beginning step I did have a way to recieve and delete data with REST, but could not recreate it again. In the end I had to decide to drop the interactions between front and backend as well as other features. 


## Personal Evaluation
I learned a lot from this project, especially with the backend, something I never done before. While I am unsatisfied with the result, as I couldn't manage to get so many to work in time, I am still glad of the attempt. 

Next time I will have to set up the server right along the html pages and not afterwards, as that made me touch the html files a lot of times, especially to fix the links.

## Techstack
- JavaScript, CSS, HTML without any frameworks for the frontend
- Express with Node.js for the backend
- Git for version control

