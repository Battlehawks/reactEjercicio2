const Video = ({title,dateAdded,channel,thumbnail,description}) => {
    return (
      <div>
        <div><span>Titulo: </span><span>{title}</span></div>    
        <div><span>DateAdd: </span><span>{dateAdded}</span></div>    
        <div><span>Channel: </span><span>{channel}</span></div>    
        <div><img src={thumbnail} alt=""></img></div>    
        <div><p>{description}</p></div>    
      </div>  
    );
  }
  
  export default Video;