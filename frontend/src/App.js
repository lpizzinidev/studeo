import { BrowserRouter, Switch } from 'react-router-dom';

import HomeContainer from './components/homepage/HomeContainer';
import AuthContainer from './components/auth/AuthContainer';
import DashboardContainer from './components/admin/dashboard/DashboardContainer';
import { CategoriesContainer } from './components/admin/categories/CategoriesContainer';
import NotFound from './components/pages/NotFound';

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
            <BrowserRouter>
              <Switch>
                <PublicRoute path='/' component={HomeContainer} exact />
                <PublicRoute path='/signin' component={AuthContainer} />
                <PublicRoute path='/signup' component={AuthContainer} />
                <AdminRoute path='/dashboard' component={DashboardContainer} />
                <AdminRoute
                  path='/categories/:_id?'
                  component={CategoriesContainer}
                />
                <AdminRoute component={NotFound} />
              </Switch>
            </BrowserRouter>
          </div>
        </ResourcesProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
}

export default App;
