import React from "react";

class Priority extends React.Component {

    render(){
        return(
            <select defaultValue="select-priority" onChange={ this.props.onChangeHandler }>
                <option disabled value="select-priority">
                    select priority
                </option>
                <option value="high">high</option>
                <option value="middle">middle</option>
                <option value="low">low</option>
            </select>
        );
    }
}

export default Priority;

// select>option*4