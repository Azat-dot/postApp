import React from 'react';

// class ClassCounter1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increment = this.incrment.bind(this);
//     this.decrement = this.decrment.bind(this);
//   }

//   increment() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   decrement() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.count}</div>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// export default ClassCounter1;

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.incrment.bind(this);
    this.decrement = this.decrment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
