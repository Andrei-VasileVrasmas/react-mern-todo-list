import React, { Component } from 'react'
import needle from 'needle'
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

  onSubmit = e =>{
    e.preventDefault();
    needle.post('localhost:5000/api/saveData',
        {
            day: this.state.name,
            toDo: this.state.task
        }, { json: true }, (err, res) => {
            if (err) {
                console.error(err);
            };
            console.log(res.body);
        });
  }

  render () {
    return (
      <div>
        <h3>Day: {this.state.name}</h3>
        <p>Task:</p>
        <input value={this.state.task} onChange={this.onChange}/>
        <button className="submit" onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}

export default Day
