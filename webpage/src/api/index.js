import axios from 'axios';

const url = 'http://localhost:420';

export const fetchreq = async(req, project) => axios.post(`${url}/${project}`, req);
