import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryItems from '../Gallery/GalleryItems'


function App() {
  // define an empty array for my gallery images
  let [gallery, setGallery] = useState([]);

  // renders gallery on page load
  useEffect(() => {
    getGallery()
  }, [])
  // Get method that is sent the images from my gallery
  // then passes those images to setGallery to exist on the DOM
  const getGallery = () => {
  axios({
    method: 'GET',
    url: '/gallery'
  }).then((response) => {
    setGallery(response.data);
  }).catch((error) => {
    alert('Something went wrong!');
    console.log('Error in GET,', error);
  })
  }
  // PUT method that is passed the itemid
  // then updates the DOM based on the button pressed 
  // (functions in GalleryItem)
  const likeItem = (itemId) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${itemId}`
    }).then((response) => {
      getGallery(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  // renders GalleryItems list that loops through the gallery Array
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryItems list={gallery} likeItem={likeItem}/>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
