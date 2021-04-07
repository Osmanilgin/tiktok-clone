import axios from "./axios"
import './App.css';
import Videos from './Videos';
import { useEffect, useState } from "react";

function App() {
 
  const [videos,setVideos] = useState([])

   useEffect(() => {
     
      async function fetchPosts(){
        const response = await axios.get("/v2/posts")
         setVideos(response.data)

         return response;
      }

        fetchPosts();
   }, [])

  return (
    <div className="App">
      <div className="app__videos">
       {videos.map(({
            url,likes,shares,messages,channel,description,song}) => (
           <Videos 
           url={url}
           channel={channel}
           description={description}
           likes={likes}
           song={song}
           messages={messages}
           shares={shares} /> )
       )}
      </div>
       
    </div>
  );
}

export default App;
