import { connect } from "inferno-redux";
import {
  addTodo,
  getTodo,
  editTodo,
  getTodos,
  deleteTodo
} from "../actions/todoActions";

const IndividualTodo = ({ todos, deleteTodo }) => (
  <div>
    <ul>
      <li> {todos.todoName} </li>
      <button onClick={() => deleteTodo(todos._id)}>Delete</button>
    </ul>
  </div>
);

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { editTodo, getTodos, deleteTodo }
)(IndividualTodo);
