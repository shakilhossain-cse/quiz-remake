
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/exam" component={Exam} />
          <Route path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
