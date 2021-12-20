import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter} from 'react-router-dom';
import Main from './Main';




const App = () => {
  return (
    <HashRouter>
      <Header/>
      <Main/>
      <Footer/>
    </HashRouter>
  );
};

export default App;

