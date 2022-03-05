import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import VideoList from './components/VideoList';
import axios from 'axios';
// import './App.css';

const App = () => {
  const [videos, getVideos] = useState([]);

  const getVideoData = () => {
    axios.get(`https://api.sampleapis.com/futurama/episodes`)
      .then(res => {
        const videos = res.data;
        getVideos(videos);
      })
  }

  useEffect(() => {
    getVideoData();
  }, []);

  return (
      <div className='container-fluid video-dashboard-app'>
        <div className='row'>
          <VideoList videos={videos}></VideoList>
        </div>
      </div>
  );
}

export default App;
