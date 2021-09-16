import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Sidenav from "./components/views/Sidenav";
import HomeContainer from "./components/homepage/HomeContainer";
import AuthContainer from "./components/auth/AuthContainer";
import DashboardContainer from "./components/admin/dashboard/DashboardContainer";
import CategoriesContainer from "./components/admin/categories/CategoriesContainer";
import CategoriesEditContainer from "./components/admin/categories/CategoriesEditContainer";
import ResourcesContainer from "./components/admin/resources/ResourcesContainer";
import ResourcesEditContainer from "./components/admin/resources/ResourcesEditContainer";
import NotFound from "./components/pages/NotFound";

import AppContext from "./contexts/AppContext";

function App() {
  const [sidenavOpen, setSidenavOpen] = useState(false);

  return (
    <AppContext.Provider value={{ setSidenavOpen }}>
      <div className="container">
        <BrowserRouter>
          <Sidenav open={sidenavOpen} />
          <Switch>
            <Route path="/" component={HomeContainer} exact />
            <Route path="/signin" component={AuthContainer} />
            <Route path="/signup" component={AuthContainer} />
            <Route path="/dashboard" component={DashboardContainer} />
            <Route path="/categories" component={CategoriesContainer} />
            <Route
              path="/categories-edit/:_id?"
              component={CategoriesEditContainer}
            />
            <Route path="/resources" component={ResourcesContainer} />
            <Route
              path="/resources-edit/:_id?"
              component={ResourcesEditContainer}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
