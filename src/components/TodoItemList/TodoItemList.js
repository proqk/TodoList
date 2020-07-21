import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoItemList extends Component {
    render() {
        return (
            <div>
                <TodoItem done>리액트 공부</TodoItem>
                <TodoItem>컴포넌트 스타일링</TodoItem>
                <TodoItem>안녕</TodoItem>
            </div>
        );
    }
}

export default TodoItemList;