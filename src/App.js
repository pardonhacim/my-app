import Navbar from './components/Navbar';
import Locations from './components/Locations';
import './App.css';
import data from "./data";
import Footer from './components/Footer';
import "@fontsource/inter";

function App() {
  const locations= data.map(locationData =>{
    return(
      <Locations data={locationData}/>
    )
})
  return (
          

    <div className="App">
        <Navbar/>
        <section className='location-list'>{locations}</section>
        <Footer/>
    </div>
  );
}

export default App;
