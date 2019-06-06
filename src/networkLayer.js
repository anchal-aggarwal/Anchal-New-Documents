const axios = require("axios");

let USERNAME = "9906000101";
let PASSWORD = "NIPU9906";

let microservices = {
  electricity: axios.create({
    baseURL: process.env.ELECTRICITY_MICROSERVICE_URL,
    auth: { username: USERNAME, password: PASSWORD }
  }),
  complaint: axios.create({
    baseURL: process.env.COMPLAINT_MICROSERVICE_URL,
    auth: { username: USERNAME, password: PASSWORD }
  }),
  attendance: axios.create({
    baseURL: process.env.ATTENDANCE_MICROSERVICE_URL,
    auth: { username: USERNAME, password: PASSWORD }
  }),
  marketing: axios.create({
    baseURL: process.env.MARKETING_MICROSERVICE_URL,
    auth: { username: USERNAME, password: PASSWORD }
  })

};


module.exports = microservices;
