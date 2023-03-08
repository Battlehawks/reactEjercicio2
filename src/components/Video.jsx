const Video = ({title,dateAdded,channel,thumbnail,description}) => {
    return (
      <div>
        <div class="video-info"><span>Titulo: </span><span>{title}</span></div>    
        <div class="video-info"><span>DateAdd: </span><span>{dateAdded}</span></div>    
        <div class="video-info"><span>Channel: </span><span>{channel}</span></div>    
        <div class="video-image"><img src={thumbnail} alt=""></img></div>    
        <div class="video-info"><p>{description}</p></div>    
      </div>
    );
  }
  
  export default Video;