import { Component, Fragment } from "inferno";
import { connect } from "inferno-redux";
import {
  addTodo,
  getTodos,
  getTodo,
  deleteTodo,
  editData
} from "../actions/todoActions";
import IndividualTodo from "./IndividualTodo";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todoName: "",
      oldTodo: ""
    };
  }

  componentDidMount() {
    this.props.getTodos();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddTodo = async e => {
    e.preventDefault();
    const { todoName } = this.state;
    const { addTodo, getTodos } = this.props;

    let newTodo = {
      todoName
    };

    await addTodo(newTodo);
    await getTodos();

    this.setState({ todoName: "" });
  };

  render() {
    const { todos, todo } = this.props.todo;
    const { todoName } = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <Fragment>
          <input
            type="text"
            name="todoName"
            value={todoName}
            onInput={this.handleChange}
          />
          <button onClick={this.handleAddTodo} type="submit">
            Add
          </button>
        </Fragment>
        <Fragment>
          {todos.map(todo => (
            <Fragment>
              <IndividualTodo key={todo._id} todos={todo} />
            </Fragment>
          ))}
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getTodos, addTodo, getTodo }
)(Todo);
