// any JS in here in automatically run for us

// import the React libraly
import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import "./main.html";
import ImageList from "./components/image_list";

//create a component
class App extends Component {
  state = {
    images: []
  }
  componentWillMount = () => {
    console.log("555555555555");
    axios
      .get("https://api.imgur.com/3/gallery/hot/viral/0.json")
      .then(result => {
        // console.log(result.data);
        // this.render()
        this.setState({
          images: result.data.data
        })
      })
      .catch(err => {
        console.log(message.err);
      });
  };
  render() {
    console.log("render images", this.state.images);

    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

// render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
