import { useState, useEffect} from 'react';

function GalleryItem(props) {

    // If image is displayed change image to item description
    // if item description is displayed change description back to image
    const displayDescriptionOrImage = () => {
        if ( /* image is displayed */ ){
            <p>{item.description}</p> // display description
        } else /* if description is displayed */ { 
            <img src={item.path}></img> // display image
        }
    }
    return(
        <div>
            {/* - Loop through GalleryItems passed in from App.jsx
                - display image, love button and number of likes
                - conditionally render description in place of image
                when image div is clicked */}
            {props.list.map(item => (
                <div>
                    <div key={item.id} onClick={() => displayDescriptionOrImage(item.description)}>
                        <img src={item.path}></img>
                    </div>
                    <div className="item-description">{item.description}</div>
                    <button className="love-button">love this!</button>
                    <div>{item.likes}</div>
                </div>
            ))}
        </div>
    )
}

export default GalleryItem;