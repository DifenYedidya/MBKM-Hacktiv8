import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Header, Content, Footer} from './components/index'

function App(){
    return(
        <>
          <Header/>
          <div className="container"> 
            <Content/>
          </div>
          <Footer/>
        </>
    );
}

export default App;