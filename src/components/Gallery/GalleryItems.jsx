import GalleryItem from '../Gallery/GalleryItem';

function GalleryItems(props) {
    return(
        <div>
            {/* Loop through gallery */}
            {props.list.map(item => (
                <GalleryItem key={item.id} item={item}/> // TODO item={item might be wrong...}
            ))}
        </div>
    );
}

export default GalleryItems;