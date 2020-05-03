import React, { Component } from 'react'
import needle from 'needle'
import Day from './Day'
import { formatDays } from './func'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { tasks:[] }
  }

  componentDidMount = () => {

    needle.get('http://localhost:5000/api/getData', (err,res) => {
      if (err) {
        console.log(err)
      } else {
        const formattedDays = formatDays(res.body);

        this.setState({
          tasks:formattedDays
        });
      }
    });
  }


  render () {
    return (
      <div>
        <h1>Todo list</h1>
        <Day dayData={this.state.tasks[0]} />
        <Day dayData={this.state.tasks[1]} />
        <Day dayData={this.state.tasks[2]} />
        <Day dayData={this.state.tasks[3]} />
        <Day dayData={this.state.tasks[4]} />
        <Day dayData={this.state.tasks[5]} />
        <Day dayData={this.state.tasks[6]} />

      </div>
    )
  }
}

export default App
