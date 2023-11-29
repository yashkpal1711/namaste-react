import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>Profile from Class Based Component</h2>
        <p>Name:{this.props.name}</p>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }} 
        >
          update count
        </button>
      </div>
    );
  }
}

export default ProfileClass;
