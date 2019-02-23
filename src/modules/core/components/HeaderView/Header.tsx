import React from 'react';

import './Header.scss';


export const Header:React.StatelessComponent = () => (
    <header className="Header">
      <div className="container is-fluid is-white is-above is-clipped columns">
        {/* <span className="Header__logo column is-3">
          <img src={require('../../../../images/logo.png')}/>
        </span> */}
        <div className="Header__customer column is-5">
          <p>Testing</p>
        </div>
        <div className="Header__user column is-4">
          <p>Test2</p>
        </div>
      </div>
    </header>
  );
