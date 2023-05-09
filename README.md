# Scratch Pay Test - Express Node TS and Docker

## Summary

This API allows you to search for clinics based on different parameters like name, state, and opening/closing times.The allowed params are:
 - name: allows you to search by name
 - State: allows you to search by state code, i.e. FL
 - From: allows you to search by opening time, i.e, 09:00 or 15:00 
 - To: allows you to search by closing time, i.e, 22:00 or 23:00

### Tech Used

Node, Express, TypeScript, Axios, 

How to use this app locally, make sure you have Docker installed on your computer.
 - from the root folder, run this command:
```
docker compose up
```

Install Postman and make a GET request like the following:
- http://localhost:3000/api/clinic or http://localhost:3000/api/clinic?state=FL&from=09:00&to=23:00 for example.

Example of a response for this request http://localhost:3000/api/clinic?state=FL&from=09:00&to=23:00

<img width="437" alt="Screenshot 2023-05-09 at 12 01 21 AM" src="https://user-images.githubusercontent.com/11094871/236990953-b9a97e4b-7933-4053-a93f-86d88d4a65ce.png">


# Author

Made with ♥ by Carlos Galceran | [Github](https://github.com/cgalceran) | [LinkedIn](https://www.linkedin.com/in/cgalceran/)
