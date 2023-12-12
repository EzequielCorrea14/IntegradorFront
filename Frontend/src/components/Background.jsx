import React from 'react'
import video from './images/video2.mp4'

const Background = () => {
  return (
    <div>
        <video   muted autoPlay loop>
            <source id="mostrarVideo" src={video}/>
        </video>
        
    </div>
  )
}

export default Background