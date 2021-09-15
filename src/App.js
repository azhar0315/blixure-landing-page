import logo from './logo.svg';
import './App.css';
import{Home}from './containar/home'
import { Header } from './header/header';
import { Hero } from './containar/hero';
import { Shopbrand } from './containar/shopbrand';
import { Bookservice } from './containar/bookservice';
import { Enterraffles } from './containar/enterraffles';
import { Contactus } from './containar/contactus';
import { Brandgrowth } from './containar/brandgrowth';
function App() {
  return (

    <div>
       <Header></Header>
       <Hero></Hero>
       <Shopbrand></Shopbrand>
       <Bookservice></Bookservice>
       <Enterraffles></Enterraffles>
       <Contactus></Contactus>
       <Brandgrowth></Brandgrowth>
     
    </div>
  
     


    
  );
}


export default App;
