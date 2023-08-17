import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import ImageForm from './components/imageForm'
import ImageList from './components/imageList'




function App(props) {
console.log(props)

const {loading} = props

return (
    <div className='App'>

    <h1>Search for Cats!</h1>
    <ImageForm />

  {
    loading ? <h3>We are loading</h3> : <ImageList />
  }


    </div>
  );
}

const mapStateToProps = state => {
  return{
    loading: state.loading
    
  }
  
  
}


export default connect(mapStateToProps)(App);