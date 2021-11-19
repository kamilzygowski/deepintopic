import './Home.scss';
import Hero from '../Hero/Hero';
import Sidebar from '../Sidebar/Sidebar';
import MainView from '../MainView/MainView';
import NavBar from '../NavBar/NavBar';


function Home() {
  return (
    <div className="Home">
      <Hero/>
      
      <MainView/>
    </div>
  );
}

export default Home;
