import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Profiles from './components/Profiles';
import NigeriaInfo from './components/NigeriaInfo';
import FamousLandmarks from './components/FamousLandmarks';
import FamousArtists from './components/FamousArtists';
import NigerianMeals from './components/NigerianMeals';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Profiles />
      <NigeriaInfo />
      <FamousLandmarks />
      <FamousArtists />
      <NigerianMeals />
      <Footer />
    </div>
  );
}

export default App;
