import React from 'react';

class Book extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: null,
      id: null,
      category: null,
    }
  }
  render(){
    const {title} = this.props;
    const {id} = this.props;
    const {category} = this.props;
    return (
      <td>
        <p> {id} </p>
        <p> {title} </p> 
        <p> {category} </p>
      </td>
    )
  }
}
