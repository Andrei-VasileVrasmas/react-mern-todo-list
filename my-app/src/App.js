import React, { Component } from 'react'
import Day from './Day'
import { getFormattedDays } from './func'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = { tasks:[] }
  }

  refreshState = () => {
    getFormattedDays().then(data => this.setState({tasks:data}));
  }

  componentDidMount = () => {
    this.refreshState();
  }


  render () {
    return (
      <div>
        <h1>Todo list</h1>
        <Day dayData={this.state.tasks[0]} refreshState={this.refreshState}/>
        <Day dayData={this.state.tasks[1]} refreshState={this.refreshState}/>
        <Day dayData={this.state.tasks[2]} refreshState={this.refreshState}/>
        <Day dayData={this.state.tasks[3]} refreshState={this.refreshState}/>
        <Day dayData={this.state.tasks[4]} refreshState={this.refreshState}/>
        <Day dayData={this.state.tasks[5]} refreshState={this.refreshState}/>
        <Day dayData={this.state.tasks[6]} refreshState={this.refreshState}/>
      </div>
    )
  }
}

export default App
