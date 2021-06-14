import axios from 'axios';

const url = 'https://mlprojects-backend.herokuapp.com';

export const fetchreq = async (req, project) => axios.post(`${url}/${project}`, req);
