import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const hums = cityData.list.map(weather => weather.main.humidity)

        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td><Chart data={temps} color="blue"/></td>
                <td><Chart data={pressures} color="green"/></td>
                <td><Chart data={hums} color="orange"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Kelvin) </th>
                        <th>Pressure (hPA) </th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);