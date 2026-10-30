import React, { useState, useEffect } from 'react';
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png' 
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../Data';
import moment from 'moment'


const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);

  const [channelData, setChannelData] = useState(null);

    const fetchVideoData = async () => {
        //fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));

    }

    const fetchOtherData = async () => {
        //fetching channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))
    }

    useEffect(() => {
        fetchVideoData();
    }, [])

    useEffect(() => {
        fetchOtherData();
    }, [apiData])

	return (
        <div className="play-video">
            {/*<video src={video} controls autoPlay muted></video>*/}
            <iframe title="YouTube video player" src={`https://www.youtube.com/embed/${videoId}`} referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount):"16k"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow():"null"}</p>
                <div>
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount):155}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thunmbnails.default.url:"null"} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle:""}</p>
                    <span>{channelData ? channelData.statistics.subscriberCount:"1M"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250):"Description Here"}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount):102}</h4>
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
