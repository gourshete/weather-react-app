import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      error: null,
      items: []
    }
  }

  callApi = ()=> {
    const apiKey = '4d8fb5b93d4af21d66a2948710284366';
    const input = document.querySelector(".city");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.cod !== '404'){
          const items = this.state.items;
          if(items.length<5){
            items.splice(0, 0, result);
          }
          else{
            items.pop();
            items.splice(0, 0, result)
          }
          this.setState({items: items})
        }
      },
      (error) => {
        this.setState({error: error});
      }
    );
  }

  render() {
    const { error, items } = this.state;
    if(error){
      return(<div>Error: {error.message}</div>)
    } else{
  return (
    <div className="App">
      <div className="temperature">
        <label className='header'>Find out Weathers...</label>
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