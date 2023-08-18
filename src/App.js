import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import ImageForm from './components/imageForm'
import ImageList from './components/imageList'
import { useEffect } from 'react';
import { fetchStart, fetchSuccess } from './actions';
import axios from 'axios';

function App(props) {


const {loading, err} = props
console.log(props)



// useEffect code when you first mount a component.
useEffect (() => {
//  trigger your action here.
props.fetchStart();
axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
.then(res => {
  props.fetchSuccess(res.data)
})
},[])
// initial load = empty []



return (
    <div className='App'>

    <h1>The fun of Cats!</h1>
    <ImageForm />

  {
    (err !== "") && <h4>{err}</h4>
  }


  {
    loading ? <h3>We are loading</h3> : <ImageList />
  }


    </div>
  );
}

const mapStateToProps = state => {
  return{
    loading: state.loading,
    err: state.err
  }
  
  
}



export default connect(mapStateToProps, {fetchStart, fetchSuccess})(App);