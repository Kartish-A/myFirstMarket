
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Component/Footer';
import Header from './Component/Header';
import SideBar from './Component/SideBar';
import Main from './Component/Main';
import Sorted from './Component/Sorted';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sorted/>
      <div className='wrapper'>
        <SideBar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}


export default App;