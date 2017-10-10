import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

  renderCity(data) {
    const temps = data.list.map(weather => weather.main.temp - 273);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
    const { lat, lon } = data.city.coord;
    return (
      <tr key={data.city.id}>
        <td>
          {data.city.name}, {data.city.country}
        </td>
        <td id="map">
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="red" units="°С" />
        </td>
        <td>
          <Chart data={pressures} color="orange" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City, Region</th>
            <th>Map</th>
            <th>Temperature (°С)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCity)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);