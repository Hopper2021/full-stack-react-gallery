import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryItems from '../Gallery/GalleryItems'

function App() {
  let [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery()
  }, [])

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

  const likeItem = (itemId) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${itemId}`
    }).then((response) => {
      getGallery();
    }).catch((error) => {
      console.log(error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryItems list={gallery} />
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
