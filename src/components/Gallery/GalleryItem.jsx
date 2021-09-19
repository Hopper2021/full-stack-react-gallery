import { useState } from 'react';
import '../Gallery/GalleryItem.css';

function GalleryItem({item}) {
    // useState defines isDescribed as default true
    const [isDescribed, setDescription] = useState(false);
    // useState defines the default number of likes
    const [like, setLike] = useState('');

    {/* If image is clicked
        display description */}
    const toggleDescription = (itemId) => {
        // Verify description has been clicked
        console.log('Clicked the description!');
        // Changes ithis itemId's isDescribed to true
        setDescription(itemId);
    }

    {/* If description is clicked
        display image */}
    const toggleImage = (itemId) => {
        console.log('Clicked the Image!');
        // changes this itemId's isDescribed to false
        setDescription(!itemId);
    }

    {/* If love this! button is clicked
        item.likes + 1 */}
    const likeItem = () => {
        console.log('Clicked love this!');
        setLike(item.likes++);
    }

    return(
        <div>
            {
                isDescribed ? ( 
                    <div className="image-container">
                        <div onClick={() => toggleImage(item.id)}>
                            {item.description}</div> 
                    </div>
                ) : (
                    <div className="image-container">
                        <img onClick={() => toggleDescription(item.id)}
                            src={item.path}></img>
                    </div>
                )
            }
            <button 
                onClick={() => likeItem(item.id)} c
                lassName="love-button">
                        love this!</button>
            <p className="like-num">{item.likes}</p>
        </div>
    )
}

export default GalleryItem;