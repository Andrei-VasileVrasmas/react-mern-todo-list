import React, { Component } from 'react'

class Day extends Component {
  constructor (props) {
    super(props)
    const { dayData } = props;


    this.state = {
      name: dayData && dayData.name ? dayData.name : '',
      task: dayData && dayData.task ? dayData.task : '' };
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    this.setState({
      name:nextProps.dayData.name,
      task:nextProps.dayData.task,
    })
  }

  onChange = e =>{
    this.setState({
      task:e.target.value
    },()=> console.log(this.state))
  }

  render () {
    return (
      <div>
        <h3>Day: {this.state.name}</h3>
        <p>Task:</p>
        <input value={this.state.task} onChange={this.onChange}/>
      </div>
    )
  }
}

export default Day
