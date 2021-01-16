import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Offices from './components/Offices.jsx';
import Desks from './components/Desks.jsx';
import Membership from './components/Membership.jsx';
import Pass from './components/Pass.jsx';
import Rooms from './components/Rooms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { repos: [] }
  }

  get() {
    $.ajax({
      type: 'GET',
      url: '/show'
    }).then(repos => this.setState({ repos }));
  }

  render() {
    return (
      <div key='main'>
        <div key='repos'>REPOS:</div>
        <button onClick={this.get.bind(this)}>Press me</button>
        <Offices data={this.state.repos}/>
        <Desks data={this.state.repos}/>
        <Membership data={this.state.repos}/>
        <Pass data={this.state.repos}/>
        <Rooms data={this.state.repos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))