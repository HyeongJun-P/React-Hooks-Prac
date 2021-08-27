import React, { Component } from 'react';

class App extends Component {
    state = {
        item:1,
    }
    render() {

        const {item} = this.state;

        return (
            <div>
                <h1>Hello {item}</h1>
                <h2>Start editing to see some magic happen!</h2>
                <button onClick={this.incremnetItem}>Increment</button>
                <button onClick={this.decrementItem}>Decrement</button>
            </div>
        );
    }

    incremnetItem = () => {
        this.setState({
            item: this.state.item + 1
        })
    }

    decremnetItem = () => {
        this.setState({
            item: this.state.item - 1
        })
    }

}
 
export default App;