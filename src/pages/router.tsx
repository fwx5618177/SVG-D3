import React, { Suspense } from 'react';
import { Router, Route, Link, HashRouter, Switch } from 'react-router-dom';
import { RouterList, RouterComponent } from './router.config';

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
                                component={item?.component} />
                        ))
                    }
                </Switch>
            </Suspense>
        </HashRouter>
        );
    }
}

export default RouterConfig;