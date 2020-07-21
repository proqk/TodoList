import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoItemList from './TodoItemList';

class App extends Component {
    render() {
        return (
           <PageTemplate>
                <TodoInput />
                <TodoItemList />
           </PageTemplate>
        );
    }
 }

 export default App;