import React, { Component } from 'react';

export default ({main, routeProps}) => {
    return (
        <div id="render-target">
            {React.createElement(main, routeProps)}
        </div>
    )
}
 