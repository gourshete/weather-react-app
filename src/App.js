import React, { setState, Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      temp: '',
      city: '',
      error: null,
      isLoaded: false,
      items: []
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
        const items = this.state.items;
        items.push(result);
        this.setState({items: items})
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
    const { temp, city, isLoaded, error, items } = this.state;
    if(error){
      return(<div>Error: {error.message}</div>)
    } else{
  return (
    <div className="App">
      <div className="temperature">
        <label className='header'>Temperature</label>
        <div className='input'>
          <label>
            <input className='city' type='text' name='name' placeholder='Enter city name here' />
          </label>
          <div className='submit'>
            <input type='submit' name='Submit' className='submit-button' onClick={this.callApi} />
          </div>
        </div>
      </div>
      <List items={items}/>    
    </div>
  );}
}
}