import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeContainer from "./components/homepage/HomeContainer";
import AuthContainer from "./components/auth/AuthContainer";
import DashboardContainer from "./components/admin/dashboard/DashboardContainer";
import CategoriesContainer from "./components/admin/categories/CategoriesContainer";
import CategoriesEditContainer from "./components/admin/categories/CategoriesEditContainer";
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
          <Route path="/categories" component={CategoriesContainer} />
          <Route path="/categories-edit" component={CategoriesEditContainer} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
