import axios from "axios"

 const instance = axios.create({
     baseURL: "https://tiktok-mern-backend221.herokuapp.com/"
 })

  export default instance