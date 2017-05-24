/**
 * Created by matthew on 23/05/2017.
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import IdeaList from '../../src/components/IdeaList';
import {expect} from 'chai';
import {List, Map} from 'immutable';

const {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} = TestUtils;

describe('IdeaList', () => {
    it('renders a list with only the active item if the filter is active', () => {
        const ideas = List.of(
            Map({id: 1, text: 'React', status: 'active'}),
            Map({id: 2, text: 'Redux', status: 'active'}),
            Map({id: 3, text: 'Immutable', status: 'completed'})
        );
        const filter = 'active';
        const component = renderIntoDocument(<IdeaList filter={filter} ideas={ideas}/>);
        const items = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(items.length).to.equal(2);
        expect(items[0].textContent).to.contain('React');
        expect(items[1].textContent).to.contain('Redux');
    });

    it('renders a list with only completed items if the filter is completed', () => {
        const ideas = List.of(
            Map({id: 1, text: 'React', status: 'active'}),
            Map({id: 2, text: 'Redux', status: 'active'}),
            Map({id: 3, text: 'Immutable', status: 'completed'})
        );
        const filter = 'completed';
        const component = renderIntoDocument(
            <IdeaList filter={filter} ideas={ideas} />
        );
        const items = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(items.length).to.equal(1);
        expect(items[0].textContent).to.contain('Immutable');
    });
    
    it('renders a list with all the items', () => {
        const ideas = List.of(
            Map({id: 1, text: 'React', status: 'active'}),
            Map({id: 2, text: 'Redux', status: 'active'}),
            Map({id: 3, text: 'Immutable', status: 'completed'})
        );
        const filter = 'all';
        const component = renderIntoDocument(
            <IdeaList filter={filter} ideas={ideas}/>
        );
        const items = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(items.length).to.equal(3);
        expect(items[0].textContent).to.contain('React');
        expect(items[1].textContent).to.contain('Redux');
        expect(items[2].textContent).to.contain('Immutable');
    });

});
