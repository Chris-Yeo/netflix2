import React from 'react';
import './backgroundVideo.css';
// import Food from './food.mp4';

const BackgroundVideo = () => {
    return (
        <div className="test">
            <div className="videoplayer">
                <video autoPlay="autoplay" loop="loop" muted className="video" >
                    <source src='https://www.youtube.com/watch?v=P-trSZfdPUw' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content">
                <div className="subcontent">
                    <h1>A great workplace combines exceptional <br/> 
                        colleagues and hard problems.</h1>
                        <div className="input-group md-form form-sm form-2 pl-0">
                            <input className="form-control amber-border" type="text" placeholder="Search" aria-label="Search"/>
                            <div className="input-group-append">
                                <span className="input-group-text amber lighten-3" id="basic-text1"><i className="fas fa-search text-grey"
                                    aria-hidden="true"></i></span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo;