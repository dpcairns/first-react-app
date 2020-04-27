import React, { Component } from 'react'
import NavBar from './NavBar.js';
import './App.css';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar links={[
          {
              location: 'https://yahoo.com',
              description: 'recipes'
          },
          {
              location: 'https://bing.com',
              description: 'popular'
          },
          {
              location: 'https://yahoo.com',
              description: 'spring cooking'
          },
        ]} />
        {/* <RecipeHeader /> */}
        {/* <ImagesSection /> */}
        {/* <RecipeSection /> */}
      </div>
    )
  }
}
