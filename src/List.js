import React, { setState, Component } from 'react';
import './List.css'

export default class List extends Component{

  constructor(props){
    super(props);
  }

  render() {
      const items = this.props.items;
      let list = [];
      if(items.length>0){
      list = items.map((item) =>
        <div className='item'>
            <div className='header'>
              <label className='temp'> {item.main.temp}</label>
            </div>
            <div className='city-name'>
              <strong>{item.name}</strong>
            </div>
            <div className='humidity'>
              <label> Humidity - {item.main.humidity}</label>
            </div>
            <div className='weather'>
              <label>
                weather - {item.weather[0].description}
              </label>
            </div>
        </div>
        );
      }
    if(items.length>0){
        return (
            <div className="list">
                <div className="container">
                { list }
                </div>      
            </div>
            );
    } else{
        return(<div>No list yet</div>)
    }
  }
}