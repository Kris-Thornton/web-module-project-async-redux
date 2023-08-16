import React from 'react'
import data from "../imageData/catImages";
import {useKeyGen} from 'react-key-from-object';


const ImageList = (props) => {
    const keyGen = useKeyGen
    const catImages = data

    return(
        <>
        <div>List test</div>
        {
            catImages.map(() => {
                return (
                    <ul>
                        <img key={keyGen}src={catImages[4].url} />
                    </ul>
                    
                    
                )
            },)
        }
       
        </>
        
    )
    
}

export default ImageList