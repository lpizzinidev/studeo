import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeContainer from "./components/homepage/HomeContainer";
import AuthContainer from "./components/auth/AuthContainer";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeContainer} exact />
          <Route path="/signin" component={AuthContainer} />
          <Route path="/signup" component={AuthContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
