import './Home.scss';
import Hero from '../Hero/Hero';
import Sidebar from '../Sidebar/Sidebar';
import MainView from '../MainView/MainView';


function Home() {

  return (
    <div className="Home" id="/">
      <Hero/>
      <Sidebar/>
      <MainView/>
    </div>
  );
}

export default Home;
