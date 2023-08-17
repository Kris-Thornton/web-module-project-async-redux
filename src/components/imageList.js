import React from 'react';
import { connect } from 'react-redux';
import data from "../imageData/catImages";



const ImageList = (props) => {
    console.log(props)
    const {catImages} = props;
   
    
    
    return(
        <>
        <div><h1>Cats!</h1></div>
        <ul>
        {
            catImages.map((param, index) => {

                
                return (
                       
                        <li key={`Cat ${index + 1}`}>
                         <p>{`Cat ${index + 1}`}</p>    
                        <img  src={param.url} width={300} />
                        </li>
                        
                    
                    
                    
                )
            },)
        }
       </ul>
        </>
        
    )
    
}


const mapStateToProps = state => {
    return {
        catImages: state.catImages
    }
}

export default connect(mapStateToProps)(ImageList)