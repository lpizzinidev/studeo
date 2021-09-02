import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeContainer from "./components/homepage/HomeContainer";
import NotFound from "./components/globals/NotFound";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeContainer} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
