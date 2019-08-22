import { connect } from "inferno-redux";
import { getTodos, deleteTodo } from "../actions/todoActions";
import { Button } from "inferno-bootstrap";

const IndividualTodo = ({ todos, deleteTodo, getTodos }) => (
  <div>
    <ul>
      <li> {todos.todoName} </li>
      <Button
        onClick={async () => {
          await deleteTodo(todos._id);
          await getTodos();
        }}
      >
        Delete
      </Button>
    </ul>
  </div>
);

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getTodos, deleteTodo }
)(IndividualTodo);
