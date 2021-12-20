import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter} from 'react-router-dom';
import Main from './Main';




const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Main basename={process.env.PUBLIC_URL}/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

