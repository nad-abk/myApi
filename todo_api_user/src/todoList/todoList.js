import React, {Component} from "react";
import TodoForm from "./todoForm";
import TodoItem from './todoItem';

const api_url = 'http://localhost:3001/api/v1/todos';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.updateTodoList = this.updateTodoList.bind(this);
    }
    componentDidMount() {
        this.getTasks();
    }

    getTasks() {
        fetch(api_url)
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    items: response_items.reverse()
                })
            });
    }

    updateTodoList(item) {
        let _items = this.state.items
        // unshift adds to the beginning of the array
        _items.unshift(item)
        this.setState({
            items: _items
        })
    }

    render () {
        return (
            <div>
                <TodoForm api_url={api_url} updateTodoList={this.updateTodoList} />
                <ul id="todo_list">
                    {this.state.items.map((item) => (
                        <TodoItem key={item.id} item={item} />
                        //<li key={item.id}>{item.task}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default TodoList;