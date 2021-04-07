import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import "./Videos.css"
import VideoSidebar from './VideoSidebar'

function Videos({url,likes,shares,messages,channel,description,song}) {
    const [playing, setPlaying] = useState(false)
    
    const videoRef = useRef(null)

  const handleVideoPress = () =>{
      // if video is playing 
      //stop it.. 
        if (playing){
            videoRef.current.pause()
            setPlaying(false)       
         }
        else{
            videoRef.current.play()
            setPlaying(true) 
        }
      //otherwise play it
  }

    return (
        <div className="video">

<video  className="video__player"
        onClick={handleVideoPress}
        ref={videoRef}
        loop
        src={url}  ></video>
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} messages={messages} shares={shares}/>
     </div>
    )
}

export default Videos
