import React, { Suspense } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { RouterList, RouterComponent } from './pages/router.config';

class RouterConfig extends React.Component {

    render() {
        return (
            <HashRouter>
            <Suspense fallback={<div>Loading</div>}>
                <Switch>
                    {
                    (RouterList as RouterComponent[])?.map((item, index) => (
                        <Route key={'router' + index} 
                            path={item?.pathname} 
                            component={item?.component} 
                            exact={item?.exact}
                            />
                    ))
                    }
                </Switch>
            </Suspense>
        </HashRouter>
        );
    }
}

export default RouterConfig;