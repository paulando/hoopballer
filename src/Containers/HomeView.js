import React from 'react';

const HomeView = (props) => (

    <div className="page__home">
        You are on the home page
        {props.children}
    </div>

);

export default HomeView;