import React from 'react';
import './App.css';
import './index.css';

/* 
looking at the code below, consider the following:
1) What will show on the screen when we render the PutEmAllTogether component?
2) What is the parent component? Which are the child components?
3) How can we change the `name` in the Booger?
4) How can we change the `phone` in the footer?
*/

// we have 4 classes here 
// these classes all have a render method
// that render method returns some html-lookin'-stuff (JSX)
// we're mixing our JS and HTML: JSX

// declarative -- tells the computer WHAT to do
class Booger extends React.Component {
  render() {
      return (
      <div> Hi, {this.props.name}, I am the header!</div>
      );
  }
}

// imperative -- tells the computer HOW to do something
// const div = document.createElement('div')
// div.textContent = `<div> Hi, ${this.props.name}, I am the header!</div>`
// body.append(div)

class Article extends React.Component {
  render() {
      return (
          <div>I am the {this.props.rachelsThing.name}!</div>
      );
  }
}

class Footer extends React.Component {
  render() {
  let myColor;

  if (this.props.phone === '7') {
    myColor = 'red'
  }

      return (
          <div style={{ color: myColor }}> I am the footer! Call us at {this.props.phone}</div>
      );
  }
}

export default class PutEmAllTogether extends React.Component {
  render() {
    const spot = { name: 'MAAAGIC', age: 7 };

      return (
        <div className="App App-header">
          <h1>Time to click the legos together!</h1>
          <Booger name="fanny" otherPropBooger="it doesn't matter"/>
          <Article rachelsThing={spot} />
          <Footer phone="345-456-5431" />
          <Footer phone="3453456" />
          <Footer phone="546745" />
          <Footer phone="576856" />
          <Footer phone="7" />
          <Footer phone="34564" />
          <Footer phone="6789687" />
        </div>
      );
  }
}