import React from 'react';
import './styled.css';
class List extends React.Component {

    render() {
        
        const items = this.props.list.map((item, key) =>
        <li key={item.id}><p>{item}<input type="text" /></p></li>);
        
        return (
            <div>
                <ul className="list">
                    {items}
                </ul>
            </div>
        )
    }
}
export default List;
/* <ul>
                <div className="todoListMain">
                    <div className="header">
                    <form>
                        <input placeholder="Task" />
                        <button type="submit"> Add Task </button>
                    </form>
                    </div>
                </div>
                </ul> */