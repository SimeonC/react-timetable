import React from 'react';
import ReactDOM from 'react-dom';
import Timetable from './Timetable';

const targetNode = document.createElement('div');
document.body.appendChild(targetNode);
ReactDOM.render(<Timetable />, targetNode);
