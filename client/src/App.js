import { Component } from "inferno";
import Todo from "./components/Todo";

import { BrowserRouter as Router, Route, Switch } from "inferno-router";
import { Provider } from "inferno-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Todo} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
