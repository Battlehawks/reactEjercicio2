import './App.css';
import Video from './components/Video';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header></Header>      
      <Video
        title="Rod Stewart - Young Turks (Official Video)"
        dateAdded="2009-10-29T21:26:05Z"
        channel="Rod Stewart"
        thumbnail="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg"
        description="Official music video for Rod Stewart : Young Turks from 'Tonight I'm Yours' (1981) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr ..." />
    </>
  );
}

export default App;
