import React, { Fragment } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header/header';
import Name from './components/name/name';
import Jumbotron from './components/jumbotron/jumbotron';
import Skill from './components/skill/skill';
// import Card from 'card';
// import Previus from 'previus';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <Fragment>
      <div className="topPart">
        <Header />
        <Jumbotron />
        <Name />
      </div>
      
      <Skill />

      <Footer />
    </Fragment>
  )
}

export default App;
