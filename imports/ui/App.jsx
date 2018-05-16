import React, { Component } from 'react';

export default ({main, routeProps}) => {
    return (
        <div className="mContainer" id="render-target">
            {React.createElement(main, routeProps)}
        </div>
    )
}
 