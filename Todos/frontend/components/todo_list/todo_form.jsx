import React from 'react';
import todosReducer from '../../reducers/todos_reducer';
import uniqueId from './utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body:"", done: "false"};
    this.getInput = this.getInput.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.currentTarget.value});
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  }


  getInput(e) {
    e.preventDefault();
    this.props.createTodo({todo: this.state}).then(
  () => this.setState({ title: "", body: "" }),
  (errors) => console.log(errors));
  }

  render() {
    return (
      <div>
        <label>Title
          <input
            onChange={this.updateTitle}
            value={this.state.title}
            id='title'
            type='text'
            placeholder='ex: kill hitler'>
          </input>
        </label>

        <br />

        <label>Body
          <input
            onChange={this.updateBody}
            value={this.state.body}
            id='body'
            placeholder='build time machine'>
          </input>
        </label>
        <button onClick={this.getInput}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
