import React from 'react';
// import ReactPlayer from 'react-player/youtube';

// var elem = document.getElementById("jsYoutubePopup");

// var player, iframe;
// var $ = document.querySelector.bind(document);

// // init player
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '200',
//     width: '300',
//     videoId: 'dQw4w9WgXcQ',
//     events: {
//       'onReady': onPlayerReady
//     }
//   });
// }

// when ready, wait for clicks
// function onPlayerReady(event) {
//   var player = event.target;
//   iframe = '<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>'
// //   setupListener(); 
// }

  

const videoUrl = 'https://www.youtube.com/watch?v=ScMzIvxBSi4';

const VideoList = (props) => {
  return (
    <>
        {props.videos.map((video, index) => (
            <div className='justify-content-start m-3 col col-md-2 col-sm-4 col-lg-2 video-block'>
                <div className="video-thumbnail">
                    <a href={videoUrl} class="video-cards-list__anchor jsYoutubePopup" data-video="ScMzIvxBSi4"> 
                        <img className="video-thumb" data-video="ScMzIvxBSi4" alt="Play this video" src="https://i3.ytimg.com/vi/ScMzIvxBSi4/maxresdefault.jpg"/>
                        <svg className = "play-btn" width="51" height="51" viewBox="0 0 51 51" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FFF" cx="25.5" cy="25.5" r="25.5"/><path d="M31.243 24.166a.997.997 0 01.282 1.386h0l-8.273 5.572a.997.997 0 01-1.386-.281 1 1 0 01-.166-.552h0V19.709a.997.997 0 011-1 1 1 0 01.552.167h0z" stroke="#004991" stroke-width="2"/></g></svg>
                    </a>
                    {/* <ReactPlayer url={videoUrl}></ReactPlayer> */}
                    
                </div>
                
                <p className="video-title">{video.title}</p>
                <p className="video-desc">{video.desc}</p>
                <p className="video-date" >{video.originalAirDate}</p>
            </div>
        ))}
    </>
  );
};

export default VideoList;