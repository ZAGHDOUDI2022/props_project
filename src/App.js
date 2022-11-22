import './App.css';
import Profile from './profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const profileElements =
  {
    fullName:"ZAGDOUDI MAHDI",
    bio:"I falled in love with full-stuck js and I'm ready to tackle new challenges",
    profession:"Full-stuck js",
    imgSrc:"/315956907_641824051003270_6697787424361097939_n (1).jpg",
    handleName:()=>{alert(`${profileElements.fullName}`)},
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <Profile data={profileElements} handleName={profileElements.handleName}><img src={profileElements.imgSrc} alt="Profile pic"/></Profile>
    </div >
  );
}

export default App;