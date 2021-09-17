
import React from 'react';
import './GalleryItems.css';

function GalleryItems({galleryItems}) {
    return(
        <div>
            {galleryItems.map(item => (
                <div className="gallery-item">
                    <div>{item.id}</div>
                    <div>{item.path}</div>
                    <div>{item.description}</div>
                    <div>{item.likes}</div>
                </div>
            ))}
        </div>
    );
}

export default GalleryItems;