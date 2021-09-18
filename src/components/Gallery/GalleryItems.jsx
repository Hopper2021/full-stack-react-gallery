
function GalleryItems(props) {
    return(
        <div>
            {props.list.map(item => (
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