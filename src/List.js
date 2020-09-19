import React, { setState, Component } from 'react';

export default class List extends Component{

  constructor(props){
    super(props);
  }

  iterare_items = () => {
    const items = this.props.items;
    const list = items.map((item) =>
        <div className='item'>
            <label> {item.main.city} - {item.main.temp}</label>
        </div>
    );
    return(list);
  }

  render() {
      const items = this.props.items;
      const list = items.map((item) =>
        <div className='item'>
            <label> {item.name} - {item.main.temp}</label>
        </div>
        );
    if(1==2){
      return(<div>No list yet</div>)
    } else{
  return (
    <div className="list">
        List
      <div className="temperature">
        { list }
      </div>      
    </div>
  );}
}
}