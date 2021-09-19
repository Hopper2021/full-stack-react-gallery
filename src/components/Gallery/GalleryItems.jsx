import GalleryItem from '../Gallery/GalleryItem';

// Function that is passed likeItem and list through to parent
function GalleryItems({list, likeItem}) {
    return(
        <div>
            {/* Loop through gallery */}
            {list.map(item => (
                // Define a unique id to help React render items faster
                // and define likeItem to be further passed up to App.jsx
                // define item for each gallery item rendered
                <GalleryItem key={item.id} item={item} likeItem={likeItem}/>
            ))}
        </div>
    );
}

export default GalleryItems;