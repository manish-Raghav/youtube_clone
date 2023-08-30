import axios from "axios";
const BASE_URL ="https://youtube138.p.rapidapi.com";
const options = {
  
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '9bb1ca68e3msh4e50d200a38ead9p163e9fjsn3563576f88ca',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

 export const fetchDataFromApi= async(url)=>{

    //process.env.REACT_APP_YOUTUBE_API_KEY
    const {data} =await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}