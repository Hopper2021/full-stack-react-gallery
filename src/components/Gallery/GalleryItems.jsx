
function GalleryItems(props) {
    return(
        <div>
            {props.list.map(item => (
                <div className="gallery-item">
                </div>
            ))}
        </div>
    );
}

export default GalleryItems;