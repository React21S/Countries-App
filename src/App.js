import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter} from 'react-router-dom';
import Main from './components/Main';




const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

