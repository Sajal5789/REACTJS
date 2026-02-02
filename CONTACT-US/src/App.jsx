//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Navigation from "./components/Navigations/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
//import Button from './components/button/Button';
import Contactform from "./components/Contactforms/Contactform";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <main className="main_container">
        <Contactform />
      </main>
    </div>
  );
}

export default App;
