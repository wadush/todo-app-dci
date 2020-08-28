import React, {Component} from "react";
// import React, {Component, useEffect} from "react";
import './TodoItem.scss';
import Priority from "./Priority";

// const completedStyle = {
//     fontStyle: "italic",
//     color: "#d35e0f",
//     opacity: 0.4,
//     textDecoration: "line-through",
// };

// Aufgabe
// Wandle diese Functional Component in eine Class Component um
class TodoItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        priority:""
    }


    onChangeHandler = (e) => {
        // Ziel/ToDo: setze hier state priority je nachdem,
        // was der Nutzer im Dropdown ausgewählt hat
        this.setState({priority: e.target.value} );
        // alert('You have selected ' + e.target.value );
    }

    // will be called just before component will be removed from DOM
    // componentWillUnmount() {
    //     alert("I hope you have really done this job since now it's about to disappear forever!")
    // }

    render() {
        const props = this.props;
        let titleStyle = null;

        if(this.state.priority === "high") {
            titleStyle = { fontWeight: "bold" }
        }else if(this.state.priority === "low") {
            titleStyle = {opacity: 0.7}
        }

        return (
            <li className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.completed} 
                    onChange={() => props.handleChange(props.id)}>
                </input>
                {<span style={{color:"red"}}> ! </span>}
                {/* <span style={ props.completed ? completedStyle : null }>{props.title}</span> */}
    
                {/* Alternative zu inline style: css klasse verwenden */}
                <span 
                    className={ props.completed ? "completed-item" : null }
                    style={ titleStyle } 
                >
                    {props.title}
                </span>
                <Priority 
                    onChangeHandler={this.onChangeHandler}
                />
               
                <button 
                    onClick={ () => { props.deleteTodoHandler(props.id) } }
                >
                    Delete
                </button>
            </li>
        )
    }
   
}

// const TodoItemFunctional = (props) => {
//     const completedStyle = {
//     fontStyle: "italic",
//     color: "#d35e0f",
//     opacity: 0.4,
//     textDecoration: "line-through",
//     };

//     return (
//         <li className="todo-item">
//             <input 
//                 type="checkbox" 
//                 checked={props.completed} 
//                 onChange={() => props.handleChange(props.id)}>
//             </input>
//             {/* <span style={ props.completed ? completedStyle : null }>{props.title}</span> */}

//             {/* Alternative zu inline style: css klasse verwenden */}
//             <span className={ props.completed ? "completed-item" : null } >{props.title}</span>
            
//             <button 
//                 onClick={ () => { props.deleteTodoHandler(props.id) } }
//             >
//                 Delete
//             </button>
//         </li>
//     )
// }

export default TodoItem;