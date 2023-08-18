import React from 'react';
import { connect } from 'react-redux';
import '../App.css';



const ImageList = (props) => {
    console.log(props)
    const {catImages} = props;
   
    
    
    return(
        <>
        <div><h6>Press button to change the cat images.</h6></div>
        <ul className = "catSnap">
        {
            catImages.map((param, index) => {

                
                return (
                       
                        <ul key={`Cat ${index + 1}`}>
                         <p>{`Cat ${index + 1}`}</p>    
                        <img  src={param.url} width={300} />
                        </ul>
                        
                    
                    
                    
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