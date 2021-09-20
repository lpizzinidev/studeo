import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeContainer from "./components/homepage/HomeContainer";
import AuthContainer from "./components/auth/AuthContainer";
import DashboardContainer from "./components/admin/dashboard/DashboardContainer";
import CategoriesEditContainer from "./components/admin/categories/CategoriesEditContainer";
import ResourcesContainer from "./components/admin/resources/ResourcesContainer";
import ResourcesEditContainer from "./components/admin/resources/ResourcesEditContainer";
import NotFound from "./components/pages/NotFound";

import { AuthProvider } from "./contexts/AuthContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { ResourcesProvider } from "./contexts/ResourcesContext";

function App() {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ResourcesProvider>
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route path="/" component={HomeContainer} exact />
                <Route path="/signin" component={AuthContainer} />
                <Route path="/signup" component={AuthContainer} />
                <Route path="/dashboard" component={DashboardContainer} />
                <Route
                  path="/categories/:_id?"
                  component={CategoriesEditContainer}
                />
                <Route
                  path="/resources/:category"
                  component={ResourcesContainer}
                />
                <Route
                  path="/resources-edit/:_id?"
                  component={ResourcesEditContainer}
                />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </div>
        </ResourcesProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
}

export default App;
