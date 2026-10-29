import React, { useState, useEffect } from 'react';
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png' 
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../Data';



const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);

    const fetchVideoData = async () => {
        //fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));

    }

    useEffect(() => {
        fetchVideoData();
    }, [])

	return (
        <div className="play-video">
            {/*<video src={video} controls autoPlay muted></video>*/}
            <iframe title="YouTube video player" src={`https://www.youtube.com/embed/${videoId}`} referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount):"16k"} &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />2</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>GreatStack</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe to GreatStack to watch more tutorials on web development</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                   <img src={user_profile} alt="" /> 
                   <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere mollitia, doloremque nobis maxime assumenda harum excepturi incidunt impedit sapiente modi nostrum aperiam! Quidem possimus minima repellendus praesentium labore maxime?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                   </div>
                </div>
                <div className="comment">
                   <img src={user_profile} alt="" /> 
                   <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere mollitia, doloremque nobis maxime assumenda harum excepturi incidunt impedit sapiente modi nostrum aperiam! Quidem possimus minima repellendus praesentium labore maxime?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                   </div>
                </div>
                <div className="comment">
                   <img src={user_profile} alt="" /> 
                   <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere mollitia, doloremque nobis maxime assumenda harum excepturi incidunt impedit sapiente modi nostrum aperiam! Quidem possimus minima repellendus praesentium labore maxime?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                   </div>
                </div>
                <div className="comment">
                   <img src={user_profile} alt="" /> 
                   <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere mollitia, doloremque nobis maxime assumenda harum excepturi incidunt impedit sapiente modi nostrum aperiam! Quidem possimus minima repellendus praesentium labore maxime?</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )  
};

export default PlayVideo;
