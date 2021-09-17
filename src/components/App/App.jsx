import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import galleryItems from '../../../server/modules/gallery.data';

function App() {
  axios({
    method: 'GET',
    url: '/'
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
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
