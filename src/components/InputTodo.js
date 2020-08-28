import React, { useState, useEffect } from 'react';


const InputTodo = (props) => {
    const [title, setTitle] = useState("");
    const [correctLength, setCorrectLength] = useState(true);
    const [invalidChar, setInvalidChar] = useState(false);

    //useEffect: Hook for componentDidMount, componentDidUpdate, componentWillUnmount
    /* More Info: https://codewithghazi.com/componentwillunmount-with-react-hooks/
    https://www.ibrahima-ndaw.com/blog/replace-component-lifecycle-with-useEffect/ */
    
    useEffect( ()=>{
        console.log("UseEffect Function von InputTodo triggered")
    });

    const onChangeHandler = (e) => {
        // console.log('Input changed', e.target);
        setTitle(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(this.state.title);

        // check if invalid character has been used
        if(title.includes('@')) {
            setInvalidChar(true);
            return;
        } else if(invalidChar === true) {
            setInvalidChar(false);
        }

        // correct length
        if (title.length > 3 && title.length < 25) {

            props.addTodoItem(title);

            setCorrectLength(true);
            setTitle("");

        } else { // incorrect length
            setCorrectLength(false);
        }
    }

    return (
        <>
            <form action="" onSubmit={onSubmitHandler} className="form">
                <input
                    className="input-text"
                    type="text"
                    placeholder="ToDo..."
                    value={title}
                    onChange={onChangeHandler}
                />
                <input type="submit" value="hinzufügen" className="input-submit" />
            </form>
            {correctLength ?
                null : 
                <p>Dein ToDo muss zwischen 3 und 25 Zeichen lang sein!</p>
            }
            { invalidChar ? 
                <p>Please don't use @ in your Todos!</p> :
                null
            }
        </>
    );
}


// class InputTodoClass extends Component {

//     state = {
//         title: "",
//         correctLength: true
//     };

//     onChangeHandler = (e) => {
//         // console.log('Input changed', e.target);
//         this.setState({
//            title: e.target.value
//         })
//     }

//     onSubmitHandler = (e) => {
//         e.preventDefault();
//         // console.log(this.state.title);

//         // correct length
//         if(this.state.title.length >3 && this.state.title.length < 25 ) {

//             this.props.addTodoItem(this.state.title);

//             // clear title and therefore text input
//             this.setState({
//                 title: "",
//                 correctLength: true
//             });

//         } else { // incorrect length
//             this.setState({
//                 correctLength: false
//             });
//         }
//     }


//     render() {

//         return (
//             <form action="" onSubmit={this.onSubmitHandler} className="form">
//                 <input
//                     className="input-text"
//                     type="text" 
//                     placeholder="ToDo..." 
//                     value={this.state.title}
//                     onChange={ this.onChangeHandler }
//                 />
//                 <input type="submit" value="hinzufügen" className="input-submit" />
//                 {this.state.correctLength ? 
//                     null : 
//                     <p>Dein ToDo muss zwischen 3 und 25 Zeichen lang sein!</p>
//                 }
//             </form>
//         );
//     }
// }

export default InputTodo;