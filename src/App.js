import React from 'react';
import './App.css';
import ImageForm from './components/imageForm'
import data from "./imageData/catImages";




function App(props) {



  const catImages = data;
  const loading = false;
  const error = "";
  const test = 'test'
  
return (
    <div className='App'>

    <h1>Search for Cats!</h1>
    <ImageForm />
   {/* <img src={catImages[0].url} /> */}
    </div>
  );
}




export default App;