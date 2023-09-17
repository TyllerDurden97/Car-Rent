import axios from 'axios';

   // const API_KEY = '80b919ebaba440b66b502ccefd484b0d';
   const BASE_URL = 'https://65043bd8c8869921ae24bc1c.mockapi.io/adverts';


async function fetchApi (page, limit='') {
   try {
    const data = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`)
         return data;
 }   
      catch(error) {
         console.log(error.message);
         throw new Error(error.message);
      };
};
   // console.log(fetchApi());
   // fetchApi();
 
export default fetchApi;