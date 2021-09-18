import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryItems from '../Gallery/GalleryItems'
import GalleryItem from '../Gallery/GalleryItem'

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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryItems list={gallery} />
        <GalleryItem list={gallery} />
        {/* <img src="images/goat_small.jpg"/> */}
        {/* GHOST GOAT */}
      </div>
    );
}

export default App;
