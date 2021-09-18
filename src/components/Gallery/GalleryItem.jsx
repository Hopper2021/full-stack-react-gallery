import { useState } from 'react';
import '../Gallery/GalleryItem.css';

function GalleryItem(props) {
    // useState defines isDescribed as default true
    const [isDescribed, setDescription] = useState(false);

    // If image is displayed change image to item description
    // if item description is displayed change description back to image
    const toggleDescription = () => {
        // Verify clicked div, and logging the correct description
        console.log('Clicked the div!');
        // When image div is clicked, change useState to the opposite of its current boolean
        setDescription(!isDescribed);
    }
    return(
        <div>
            {/* - Loop through GalleryItems passed in from App.jsx
                - display image, love button and number of likes
                - conditionally render description in place of image
                when image div is clicked */}
            {props.list.map(item => (
                <div>
                    <div className ="image-container"key={item.id} onClick={toggleDescription}>
                        {/* If isDescribed is false, display the image */}
                        {!isDescribed && <img src={item.path}></img>}
                        {/* If isDescribed is true, display the description */}
                        { isDescribed && <p>{item.description}</p>}
                    </div>
                    <div className="item-description">{item.description}</div>
                    <button className="love-button">love this!</button>
                    <div className="likes-num">{item.likes}</div>
                </div>
            ))}
        </div>
    )
}

export default GalleryItem;