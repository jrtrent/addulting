import React from 'react';

class TodoForm extends React.Component {
    state ={myInputText: ''};


handleInputChange = event => {
    this.setState({myInputText: event.target.value});
};

    render() {
        const { myInputText } = this.state;
            return (
                <div>
                    <input
                    type="text"
                    value={myInputText}
                    onChange={this.handleInputChange}
                    />
                    <button onClick={() => this.props.addTodo(myInputText)}>
                        Add Todo
                    </button>
                </div>
            );
        }
}

export default TodoForm;