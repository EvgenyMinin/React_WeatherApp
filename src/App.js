import React from 'react';

import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'ad53a6ce11e69eac54b17cf11e49c257';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        wind: undefined,
        humidity: undefined,
        error: undefined
    }

    gettingWeather = async (event) => {
        event.preventDefault(); // отмена перезагрузки по нажатии на кнопку
        const city = event.target.elements.city.value;
        
        if (city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            let custom_temp = Math.floor(data.main.temp);
            let custom_pressure = Math.floor(data.main.pressure / 1.333);

            this.setState({
                temp: custom_temp,
                city: data.name,
                country: data.sys.country,
                pressure: custom_pressure,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                error: undefined
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                wind: undefined,
                humidity: undefined,
                error: "Введите название города"
            })
        }
    }

    render() {
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="app-container">
                            <div className="title-container">
                                <Info />
                            </div>
                            <div className="form-container">
                                <Form weatherMethod={this.gettingWeather} />
                                <Weather
                                    temp={this.state.temp}
                                    city={this.state.city}
                                    country={this.state.country}
                                    pressure={this.state.pressure}
                                    wind={this.state.wind}
                                    humidity={this.state.humidity}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;