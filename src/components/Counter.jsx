import React from 'react';
import List from './List.jsx';
import './styled.css';
class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            arr: [],
            elem: ""
        };

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onIncrease() {
        this.setState({ count: this.state.count + 1 });
        if (this.state.count < 0) {this.setState({ arr: [] })}
        else this.setState({arr: [...this.state.arr, this.state.elem]});
        }

    onDecrease() {
        this.setState({ count: this.state.count - 1 });
        if (this.state.count <= 0) {this.setState({ arr: [] })};
        this.setState({arr: this.state.arr.slice(0, this.state.arr.length - 1)});
    }

    onReset() {
        this.setState({ count: 0 });
        this.setState({ arr: [] });
    }

    render() {
        return (
            <div>
                <h2 className="text">Number of wishes</h2>
                <h2>{this.state.count}</h2>
                <button className="mybutt" onClick={this.onIncrease}>increase</button>
                <button className="mybutt" onClick={this.onDecrease}>decrease</button>
                <button className="mybutt" onClick={this.onReset}>reset</button>
                <List list={this.state.arr} />
            </div>
        )
    }
}

export default Counter;