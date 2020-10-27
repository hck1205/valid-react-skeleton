import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RouteList from './routes';

export default function App() {
    return (
        <Router>
            <Suspense fallback={<div></div>}>
                <Switch>
                    {RouteList.map(({ path, page, exact = true }, i) => (
                        <Route
                            exact={exact}
                            path={path}
                            component={page}
                            key={`${path}_${i}`}
                        />
                    ))}
                </Switch>
            </Suspense>
        </Router>
    );
}
