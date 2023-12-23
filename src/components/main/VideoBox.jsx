import "./videobox.css";
import YouTube from 'react-youtube';
import "../../../index.css";


const VideoBox = () => {

    const videoId = 'Q2T4m6dWTcE';

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };
  return (
    <>
    <div className="video-box">
      <YouTube videoId={videoId} opts={opts} />
      <SocialMediaBox />
    </div>
    
    </>
  );
};

const SocialMediaBox = ()=>{
return (<div className="social-media-container">
    <div>
    <p>Güncel video içerikleri için sosyal medya kanallarımı takip edebilirsiniz.</p>
    </div>
    <div className="social-media-box">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="/facebook.png" alt="Facebook" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="/instagram.png" alt="Twitter" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/youtube.png" alt="Instagram" />
    </a>
  </div>
  </div>
)
}

export default VideoBox;