import logo from './logo.svg';
import './App.css';
import Offer from './Components/1offer/Offer';
import Navbar from './Components/0Navbar/Navbar';
import Mind from './Components/2mind/Mind';
import Top from './Components/3Top/Top';
import Food from './Components/4Food/Food';
import Array from "./arrrayofobject.json";
import Footer from "./Components/5Footer/Footer";
function App() {
  const swiggy=[
     {
      image:"./Images/mc.webp" ,
      branch:"McDonald's ",
      rating:4.2,
      time:29,
      dish:"Burgers, Beverages",
      location:"Nehru Nagar",  
     },
     {
      image:"./Images/andhra.webp" ,
      branch:"Andhra Gunpowder",
      rating:4.2,
      time:21,
      dish:"Andhra, Biryani, South Indian",
      location:"OMR Perungudi",  
     },
     {
      image:"./Images/nic.webp" ,
      branch:"NIC Ice Creams",
      rating:4.3,
      time:21,
      dish:"Ice Cream, Desserts",
      location:"Madipakkam",  
     },
     {
      image:"./Images/coff.webp" ,
      branch:"Starbucks Coffee",
      rating:4.1,
      time:22,
      dish:"Beverages, Cafe",
      location:"Perungudi",  
     },

  ]
  let sweet=Array.Food
  return (
    <div className="App">
   
      <Navbar />
      <Offer />
      <Mind/>
      <Top menu={swiggy}/>
      <Food top={sweet}/>
      <Footer />

         </div>
  );
}

export default App;
