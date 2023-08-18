import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import ImageForm from './components/imageForm'
import ImageList from './components/imageList'
import { useEffect } from 'react';
import axios from 'axios';
// Without Middleware and thunk (line 9)
// import { fetchStart, fetchSuccess } from './actions';
// With Middlewar and thunk, the action function with dispatch inside is like (line 11)
import { getCatImages } from './actions';
// Don't forget to pass in the connect below.





function App(props) {


const {loading, err, getCatImages} = props
console.log(props)

// -------------------------------------------------------
// UseEffect/API call with Middleware and thunk. axios goes now inside the 
// -------------------------------------------------------
useEffect(() => {
  getCatImages();
}, [])
// -------------------------------------------------------



// ---------------------------------------------------------
// API call without Middleware and thunk!!!!!!!
// ---------------------------------------------------------

// // useEffect code when you first mount a component.
// useEffect (() => {
// //  trigger your action here.
// props.fetchStart();
// axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
// .then(res => {
//   props.fetchSuccess(res.data)
// })
// },[])
// // initial load = empty []
// -----------------------------------------------------------


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


// Connect without Middleware and thunk (line 70)
// export default connect(mapStateToProps, {fetchStart, fetchSuccess})(App);

// Connect wit Middlewar and thunk pass in the imported function action from above via actons.
export default connect(mapStateToProps, {getCatImages})(App);