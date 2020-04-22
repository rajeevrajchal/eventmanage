import React from 'react'
import { Switch ,Route} from 'react-router-dom'
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';


const Routes = props => {
    const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
    
    //pages
    const Home = React.lazy(() => import('../views/Home/views/Home'));
    const Authentication = React.lazy(() => import('../views/Auth/Auth'));
    const Dashboard = React.lazy(() => import('../views/Dashboard/Pages/Dashboard'));

    return (
        <React.Suspense fallback={loading()}>
            <Switch>
                <PublicRoute path="/" name="Home" component={Home} exact />
                <PublicRoute path="/getting-started" name="getting-started" component={Authentication} />
                <PrivateRoute path="/dashboard/" component={Dashboard} />
            </Switch>
        </React.Suspense>
    )
}

export default Routes
