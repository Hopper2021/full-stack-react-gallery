import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import galleryItems from '../../../server/modules/gallery.data';

function App() {
  axios({
    method: 'GET',
    url: '/gallery'
  }).then((response) => {
    setGallery(response.data);
  }).catch((error) => {
    alert('Something went wrong!');
    console.log('Error in GET,', error);
  })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {galleryItems.map(item => (
          <div id="gallery-container">
            <div key={item.id}>
              <div>Image:{item.path}</div>
              <div>Description{item.description}</div>
              <button>love it!</button>
              <div>Likes:{item.likes}</div>
            </div>
          </div>
        ))}
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
