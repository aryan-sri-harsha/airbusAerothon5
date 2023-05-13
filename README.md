# Aircraft Part Marketplace Project 

Hi! We are team Mahindra University this is our submission for the Aerothon 5.0. We are working on a product called SkyCycle for the problem statement that was provided to us

Date: 13/05/2023

## Problem Statement

Develop a platform or solution that connects aircraft manufacturers, airlines, and recycling facilities to facilitate the repurposing and recycling of end-of-life aircraft components

## Our solution

Cloud based platform that has 3 separate logins for the three possible actors:
* Aircraft Manufacturer
* Airlines
* Recycling facility

Upon Signing up and then logging in, you are redirected to the listings available on the dashboard, depending on what actor you are.

## Tech Stack Used
MERN

## How to run this code
1. Make sure you have set the Access key for the cloud database access
1. Clone this repository
1. Redirect into the cloned folder and run the following to install all the dependencies:\
 `npm i`

1. Redirect to within the backend folder and run:\
 `npm start`
 
1. Redirect to within the frontend folder and run:\
 `npm start`

1. Open [localhost:3000](http://localhost:3000/) in the browser

## Usecase Diagrams

![Database ER diagram (crow's foot) - Database ER diagram (crow's foot)](https://github.com/aryan-sri-harsha/airbusAerothon5/assets/67188124/c4995768-6d53-4684-ae28-e5e05c6731fb)

The above diagram is a class diagram that helps us understand the relationship between the various classes present in the solution 

## ER Diagrams

![er](https://github.com/aryan-sri-harsha/airbusAerothon5/assets/67188124/a4220285-cb0b-4e61-92af-561e408b59fb)

The above diagram helps understand the entities and their relationships as represented in the database

## Functionality
We have finished the backend in Node.js and Express.js completely. The database connections are also fully done and the mongoDB database is hosted on MongoDB Atlas. The frontend is partially incomplete and needs to be run locally as of now. We plan on hosting both the frontend and backend on azure to add scalability.

The following are some of the features of the code we have developed:

### backend functionality:
The backend has endpoints that are used to route to specific pages. 
There is a login page that does authentication before login. 
The dashboard has 
Security is maintained by adding hashin to the password before saving it to the  

### Database functionality:
The data that was provided to us was dirty and needed formatting. Most of the formatting and cleaning was done by us manually and using excel functions, and javascript. The input data that will be provided to the deployed code in a streamlined manner will have to be formattedin case it is not formatted properly

## Conclusion

The Obsolete Aircraft Parts Marketplace is a powerful system that provides a streamlined platform for buying and selling hard-to-find aircraft parts. By leveraging modern technologies like React, Node.js, and MongoDB, the system is able to provide a user-friendly interface while also ensuring the security and privacy of its users.


