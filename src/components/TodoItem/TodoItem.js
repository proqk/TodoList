import React, { Component } from 'react';
import './TodoItem.scss';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    
    render() {
        const { text, checked, color, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); //onToggle이 실행되지 않도록
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`} style={{color}}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;