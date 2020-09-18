import React, { setState, Component } from 'react';
import './App.css';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      temp: '',
      city: '',
      error: null,
      isLoaded: false,
    }
  }

  callApi = ()=> {
    console.log('AAAAAAAAA');
    const apiKey = '4d8fb5b93d4af21d66a2948710284366';
    const input = document.querySelector(".city");
    console.log(input.value);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({temp: result.main.temp});
        this.setState({city: input.value});
      },
      (error) => {
        this.setState({isLoaded: true});
        this.setState({error: error});
      }
    );
  }

  render() {
    const { temp, city, isLoaded, error } = this.state;
    if(error){
      return(<div>Error: {error.message}</div>)
    } else{
  return (
    <div className="App">
      <div className="Temperature">
        Temperature
        <div>
          <label>
            Name:
            <input className='city' type='text' name='name' />
          </label>
          <input type='submit' name='Submit' onClick={this.callApi} />
        </div>
        <div>
          Temperature for {city} is {temp} degree Celcius.
        </div>
      </div>      
    </div>
  );}
}
}