import axios from 'axios';

// const url = 'https://mlprojects-backend.herokuapp.com';
const url = 'http://localhost:420'

export const fetchreq = async (req, project) => axios.post(`${url}/${project}`, req)
