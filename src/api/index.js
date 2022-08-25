import axios from 'axios';
import { useState } from 'react';
//mock API
let API_URL = 'https://5adc8779b80f490014fb883a.mockapi.io';
   export default function callApi(endpoint, method ='GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}
// const [user,setUser]=useState([])
// useEffect(() =>{
//     axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res)=>{
//         setUser(res.data)
//     })
// },[])
