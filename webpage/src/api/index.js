import axios from 'axios';

// Url name to be changed at :
// here
// Pakage json of webpage folder 
// Inside the main.py of backend/script file. 

// const url = 'https://mlprojects-backend.herokuapp.com';
const url = 'http://localhost:5000'

export const fetchreq = async (req, project) => axios.post(`${url}/${project}`, req)
