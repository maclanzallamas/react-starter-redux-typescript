/// <reference path="../../../../../../untyped-modules.d.ts" />

import React from 'react';
import './App.scss';

export interface IProps {
  searchText:string;
  emptyString:string;
}

export interface IDispatchProps {
  fetchOData:() => any;
}

export interface IOwnProps extends IProps, IDispatchProps {

}

export const AppView:React.StatelessComponent<IOwnProps> = (props) => (
      <div className="App">
        <header className="App-header">
          <p>Testing</p>
        </header>
      </div>
);
