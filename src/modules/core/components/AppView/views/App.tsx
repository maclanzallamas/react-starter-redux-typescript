/// <reference path="../../../../../../untyped-modules.d.ts" />

import React, { Component } from 'react';
import './App.scss';
import ReactHighcharts from 'react-highcharts';

export interface IProps {
  searchText:string;
  emptyString:string;
}

export interface IDispatchProps {
  fetchOData:() => any;
}

export interface IOwnProps extends IProps, IDispatchProps {

}

const config = {
  chart: {
    renderTo: 'container',
    type: 'bar'
  },
  title: {
      text: 'Fruit Consumption'
  },
  xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
      title: {
          text: 'Fruit eaten'
      }
  },
  series: [{
      name: 'Jane',
      data: [1, 0, 4]
  }, {
      name: 'John',
      data: [5, 7, 3]
  }]
}

export const AppView:React.StatelessComponent<IOwnProps> = (props) => (
      <div className="App">
        <header className="App-header">
          <p>Testing</p>
        </header>
        <div>
        <ReactHighcharts config = {config}></ReactHighcharts>
        </div>
      </div>
);
