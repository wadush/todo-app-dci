import React from 'react';
import Header from "./Header";
import TodoItem from "./TodoItem/TodoItem";
import InputTodo from "./InputTodo";
import axios from "axios";

class TodoContainer extends React.Component {

    state = {
        todos: [],
        isLoading: false,
        timeToGetBusy: false
    }

    componentDidMount() {
        console.log('Komponente ist fertig (componentDidMount)');
        axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _limit: 10 }
            })
            .then(
                response => { this.setState( {todos: response.data} ) } 
            );
        
        // Aufgabe
        // füge die Todo von jsonplaceholder deinem state und somit deiner ToDo-Listhinzu
    }

    componentDidUpdate() {
        console.log('component did update!')

        const {todos, timeToGetBusy} = this.state;

        //Aufgabe
        /* Hat der Nutzer mehr als 10 Todos auf 
        seiner Liste, erscheint die h2 Überschrift.
        Hat er weniger, erscheint sie nicht
        */

        // ToDo in Future: Check length of todos which are NOT completed
        if(todos.length > 10 && timeToGetBusy === false) {
            this.setState( { timeToGetBusy:true } )
        } else if(todos.length <= 10 && timeToGetBusy === true) {
            this.setState( { timeToGetBusy:false } )
        } else {
            return; // Do nothing
        }

        // Further ToDo in Future: Add margin to h1 (Header Component) if timeTiGetBudy
        // is false
    }

    onChangeCheckbox = (id) => {

        const updatedTodosArr = this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        // console.log(updatedTodosArr);

        this.setState( {
            todos: updatedTodosArr
        } );
    }

    deleteTodoHandler = (id) => {
        console.log('delete item:', id);

        this.setState( { isLoading: true} );
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            console.log(response)
            // Aufgabe
            // Entferne ToDo von unserem State
            const updatedTodosArr = this.state.todos.filter( todo => todo.id !== id );
            this.setState( {
                todos: updatedTodosArr,
                isLoading: false
            } )
            // "aktiviere" geringere opacity und "Bitte Warten" während des Löschvorgang
        })
        .catch(err => {
            //extrem simples Error-Handling
            // Mehr hierzu:https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
            // alert('Beim Entfernen gab es einen Fehler: ' + err.response)
            console.error(err);
        });


        return;
        // const updatedTodosArr = this.state.todos.filter( todo => todo.id !== id );
        // console.log(updatedTodosArr); // Ziel: Array ohne das gelöschte Element

        // //update state

        // this.setState({
        //     todos: updatedTodosArr
        // })
    }

    addTodoItem = (title) => {

        this.setState( { isLoading: true} );

        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
            // no id since server generates ID for us
        })
        .then(response => {
            console.log(response.data)
            // Aufgabe: Erweitere unseren state mit dem neuen ToDo (also response.date)

            // copy array from state to updatedTodosArr
            const updatedTodosArr = [...this.state.todos];
            // add new todo Item to updatedTodosArr on first position
            updatedTodosArr.unshift(response.data);

            //update state with updatedTodosArr
            this.setState( {
                todos: updatedTodosArr,
                isLoading:false
            } );
        })
        .catch(err => {
            //extrem simples Error-Handling
            // Mehr hierzu:https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
            // alert('Beim hinzufügen gab es einen Fehler: ' + err.response)
            console.error(err);
        });
        // Aufgabe: Füge dem Axios Post Call ein simples Error-Handling hinzu


        return;
    //     console.log('add:', title);
    //     // füge neues toDo Item dem state hinzu
    //     // drei Werte: id, title, completed
    //     const newTodo = {
    //         id: uuidv4(),
    //         title: title,
    //         completed: false
    //     }

    //     // copy array from state to updatedTodosArr
    //     const updatedTodosArr = [...this.state.todos];
    //     // add new todo Item to updatedTodosArr on first position
    //     updatedTodosArr.unshift(newTodo);

    //     //update state with updatedTodosArr
    //     this.setState({
    //         todos: updatedTodosArr
    //     });
    //     console.log(updatedTodosArr);
     }
    

    render() {

        console.log('Komponente render wird aufgerufen')
        return (
            <div 
                className="container" 
                style={ this.state.isLoading ? {opacity: 0.3} : null }
            >
                <Header timeToGetBusy= { this.state.timeToGetBusy }/>

                <InputTodo 
                    addTodoItem ={this.addTodoItem}
                />
                {this.state.isLoading ? <p>Bitte warten...</p> : null}
                <ul>
                    {
                        this.state.todos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                handleChange={this.onChangeCheckbox} 
                                deleteTodoHandler={this.deleteTodoHandler}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

// functional component
const TodoContainerFunction = (props) => {

    return (
        <div>
            <h1>Hi, ich bin der TodoContainer!</h1>
            <p>{props.text}</p>
        </div>);
};
void TodoContainerFunction; // Tue nichts -> vermeidet warning

export default TodoContainer;