import {Routers} from "../view";
import React from 'react';

export default class ViewManager extends React.PureComponent {
    
    constructor() {
        super();
        this.routes = [...Routers]
    }

    /**
     * append other route into the end of routes
     * @param route {name, path, component}
     */
    addRoute = (route) => {
        let arr = [];
        arr.push(route);
        this.routes.forEach((value, index) => {
            if (value.name === route.name) {
                return;
            }
            arr.push(value)
        });
        this.routes = [];
        this.routes = arr.slice();
    }

    getRoutes = () => {
        return this.routes;
    };
}