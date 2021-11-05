import { BrowserRouter, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import HomeContainer from './components/homepage/HomeContainer';
import AuthContainer from './components/auth/AuthContainer';
import DashboardContainer from './components/admin/dashboard/DashboardContainer';
import { CategoriesContainer } from './components/admin/categories/CategoriesContainer';
import { NotFound } from './components/pages/NotFound';
import { ErrorFallback } from './components/pages/ErrorFallback';

import { AuthProvider } from './contexts/AuthContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { ResourcesProvider } from './contexts/ResourcesContext';

import { AdminRoute } from './components/AdminRoute';
import { PublicRoute } from './components/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ResourcesProvider>
          <div className='container'>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <BrowserRouter>
                <Switch>
                  <PublicRoute path='/' component={HomeContainer} exact />
                  <PublicRoute path='/signin' component={AuthContainer} exact />
                  <PublicRoute path='/signup' component={AuthContainer} exact />
                  <AdminRoute
                    path='/dashboard'
                    component={DashboardContainer}
                    exact
                  />
                  <AdminRoute
                    path='/categories/:_id?'
                    component={CategoriesContainer}
                    exact
                  />
                  <AdminRoute component={NotFound} />
                </Switch>
              </BrowserRouter>
            </ErrorBoundary>
          </div>
        </ResourcesProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
}

export default App;
