import React, {Component} from 'react'
import needle from 'needle'



const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Day extends Component {
  constructor(props) {
    super(props)
    const {
      dayData
    } = props;


    this.state = {
      tasks:dayData,
      id: dayData && dayData.id ? dayData.id : '',
      name: dayData && dayData.name ? dayData.name : '',
      task: dayData && dayData.task ? dayData.task : '',
      lastChangeTime: 0
    };
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
      this.setState({
        tasks:nextProps.dayData,
        id: nextProps.dayData.id,
        name: nextProps.dayData.name,
        task: nextProps.dayData.task,
      });
  }

  shouldDataSend = async () => {
    const waitingTime = 2000;
    await sleep(waitingTime);
    const currentTime = new Date().getTime();

    if (currentTime - waitingTime >= this.state.lastChangeTime) {
       this.onSubmit().then(() => this.props.refreshState());
    }
  }

  onChange = e => {
    this.setState({
      task: e.target.value,
      lastChangeTime: new Date().getTime()
    });
    this.shouldDataSend();
  }

  onDelete = e => {
    e.preventDefault();
    needle.delete('localhost:5000/api/deleteData/', {
      id: this.state.id,
      day: this.state.name,
      toDo: this.state.task
    }, {
      json: true
    }, (err, res) => {
      if (err) {
        console.error(err);
      };
      console.log(res.statusCode);
      this.props.refreshState();
    });
  };

  onSubmit = e => {
    return needle('post', 'localhost:5000/api/saveData', {
      _id: this.state.id,
      day:this.state.name,
      toDo: this.state.task
    }, {
      json: true
    }).then(resp => {
        console.log('TASK SAVED');
      }).catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (
      <div>
        <h4 className="pwhite">Day: {this.state.name}</h4>
        <p className="phide">Task uuid:{this.state.id} </p>
        <input value={this.state.task} onChange={this.onChange}/>
        <button className="deleteBtn" onClick={this.onDelete}>Discard</button>
      </div>
    )
  }
}


  export default Day
