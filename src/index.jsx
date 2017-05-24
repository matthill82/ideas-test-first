/**
 * Created by matthew.hill on 17/05/2017.
 */

console.log('what the fuck.....');

import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import IdeaApp from './components/IdeaApp';

const ideas = List.of(
    Map({id: 1, text: 'React', status: 'active', editing: false}),
    Map({id: 2, text: 'Redux', status: 'active', editing: false}),
    Map({id: 3, text: 'Immutable', status: 'completed', editing: false})
);

const filter = 'all';

require('../node_modules/todomvc-app-css/index.css');

ReactDOM.render(
    <IdeaApp ideas={ideas} filter={filter} />,
    document.getElementById('app')
);
