import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("coonstructor");
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log("didMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("didUpdate");
    if (this.state.count === 11) {
      this.setState({ count: 5 });
    }
  }
  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })} className="p-3 text-white bg-slate-600">
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
