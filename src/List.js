import React, { setState, Component } from 'react';

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
            <label> {item.name} - {item.main.temp}</label>
        </div>
        );
      }
    if(items.length>0){
        return (
            <div className="list">
                List
                <div className="temperature">
                { list }
                </div>      
            </div>
            );
    } else{
        return(<div>No list yet</div>)
    }
  }
}