import React from 'react';
import MoveInContent from './MoveInContent.jsx';
 
class MoveIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      date: props.date || null
    };
    this.set = props.set;
  }

  handleShowChange() {
    const show = !this.state.show;
    this.setState({ show });
  }

  setDate(date) {
    if (date) {
      this.setState({ date, show: false });
      this.set(date);
    }
  }

  render() {
    let content = null;
    if (this.state.show) {
      content = (
      <MoveInContent date={date} setDate={this.setDate.bind(this)} />
      )
    }
    let date = this.state.date.toString();
    return (
      <div className="date-container">
        <button 
          className="date-button" 
          onClick={this.handleShowChange.bind(this)}
          style={this.state.date ? { "backgroundColor": "blue", "color": "white"} : {}}
        >
          {this.state.date ? `${date.split(' ')[1]} ${date.split(' ')[2]}` : "Move-in"}
        </button>
        {content}
      </div>
    )
  }
};

export default MoveIn;