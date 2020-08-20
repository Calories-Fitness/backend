import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ViewManager} from "./manager";

export class App extends React.Component {

    getRoutes = routes => {
        return routes.map((prop, key) => {
            return (
                <Route path={prop.path} key={key} component={prop.component} />
            );
        });
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {this.getRoutes(this.props.routes)}
                </Switch>
            </BrowserRouter>
        )
    }
}

export class Application {
    constructor() {
        this.view = new ViewManager();
    }

    addRoute = (route) => {
        this.view.addRoute(route);
    };

    render = (containerId, history) => {
        ReactDOM.render(
            <App routes={this.view.getRoutes()} history={history}/>,
            document.getElementById(containerId),
        );
    };

    unmount = containerId => {
        ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
    };
}

const application = new Application();

window.renderContainer = (containerId, history) => {
    application.render(containerId, history);
    serviceWorker.unregister();
}

window.unmountContainer = containerId => {
    application.unmount(containerId);
};

export function createApplication() {
    return new Application();
}

