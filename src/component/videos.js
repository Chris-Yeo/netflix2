import React from 'react';
import './videos.css';

const Video = ({youtubeVideo}) => {
    return (
       <div className="videos">
           {
               youtubeVideo.map((element) => (
                   <div>
                   {element.videoplayer}
                   </div>
               ))
           }
       </div>
    )
};

export default Video