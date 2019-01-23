import React, { Component } from 'react';
import Number from './Number';
import Button from './Button';

class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         num: 0
    //     };
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    // }
    state = {
       num: 0
    };
    increment = () => {
        this.setState((prevState) => {
            return {
                num: ++prevState.num
            }
        });
        // this.setState({
        //         num: ++this.state.num
        // });
    }
    decrement = () => {
        this.setState((prevState) => {
            return {
                num: --prevState.num
            }
        });
    }
  render() {
    return (
      <div>
          <Number text={this.state.num} />
          <Button text="+" clicked={this.increment.bind(this)} />
          <Button text="-" clicked={this.decrement} />
      </div>
    );
  }
}

export default App;
