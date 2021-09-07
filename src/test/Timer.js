import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 2,
      arr: [{ nama: "raven" }, { nama: "wijaya" }],
    };
  }
  componentWillMount() {
    alert("The component is going to be mounted");
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    alert("The component is going to be unmounted");
  }
  componentDidUpdate() {
    alert("The component is going to be update");
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
    });
  }

  render() {
    console.log("render");
   
    const {nama} = {nama: ["raven","wijaya"]}
    console.log(nama);
    return (
      <div>
        <h1 id="timer">hitungmundur: {this.state.time}</h1>;
      </div>
    );
  }
}

export default Timer;
