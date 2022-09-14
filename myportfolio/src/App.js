

import './App.css';
import Header from './Header';
import Home from './Home';
import Introduction from './Introduction';
import Skills from './Skills';
import Services from './Services';
import Contact_form from './Contact_form';
import Footer from './Footer';
import Navbar from './Navbar';
// import { BrowserRouter as Router, Switch, Route } from 
// "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Home />
      <Introduction />
      <Skills />
      <Services />
      <Contact_form />
      <Footer/>
      
    </div>
  );
}

export default App;
