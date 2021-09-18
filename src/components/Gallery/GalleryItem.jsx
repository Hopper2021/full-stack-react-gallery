
function GalleryItem(props) {
    return(
        <div>
            {props.list.map(item => (
                <div>
                    <img key={item.id} src={item.path}></img>
                    <div className="item-description">{item.description}</div>
                    <button className="love-button">love this!</button>
                    <div>{item.likes}</div>
                </div>
            ))}
        </div>
    )
}

export default GalleryItem;