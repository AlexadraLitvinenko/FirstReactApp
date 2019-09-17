import './styled.css';
import React, {Component} from 'react';
import Counter from './Counter.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'List of my wishes',
        };
        
    }

    render() {
        const { title } = this.state;  

        return (
            <div className="main">
                <h1>{title}</h1>
                <Counter/>
            </div>
        );
    }
}
export default App;