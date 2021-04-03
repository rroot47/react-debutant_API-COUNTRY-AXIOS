import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notfound from "./pages/Notfound";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/a-propos' exact component={About} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
