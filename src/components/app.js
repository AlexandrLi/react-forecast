import React, { Component } from 'react';
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

export default class App extends Component {

  render() {
    return (
      <div className="col-md-10 m-md-auto">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}