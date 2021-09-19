import GalleryItem from '../Gallery/GalleryItem';

function GalleryItems({list, likeItem}) {
    return(
        <div>
            {/* Loop through gallery */}
            {list.map(item => (
                <GalleryItem key={item.id} item={item} likeItem={likeItem}/> // TODO item={item might be wrong...}
            ))}
        </div>
    );
}

export default GalleryItems;