/**
 * Created by matthewhill on 24/05/2017.
 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import IdeaItem from '../../src/components/IdeaItem';
import {expect} from 'chai';

const {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} = TestUtils;

describe('IdeaItem', () => {

    it('renders a idea item', () => {
        const text = 'React';
        const component = renderIntoDocument(
            <IdeaItem text={text}/>
        );
        const idea = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(idea.length).to.equal(1);
        expect(idea[0].textContent).to.contain('React');

    });

    it('strikes through the item if it is completed', () => {
        const text = 'React';
        const component = renderIntoDocument(
            <IdeaItem text={text} completed={true}/>
        );
        const idea = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(idea[0].classList.contains('completed')).to.equal(true);

    });

    it('should look different when editing', () => {
        const text = 'React';
        const component = renderIntoDocument(
            <IdeaItem text={text} isEditing={true}/>
        );
        const idea = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(idea[0].classList.contains('editing')).to.equal(true);
    });

    it('should be checked if the item is completed', () => {
        const text = 'React';
        const text2 = 'Redux';

        const component = renderIntoDocument(
            <IdeaItem text={text} isCompleted={true}/>,
            <IdeaItem text={text2} isCompleted={false}/>
        );

        const input = scryRenderedDOMComponentsWithTag(component, 'input');
        expect(input[0].checked).to.equal(true);
        expect(input[1].checked).to.equal(false);

    });

    it('invokes callback when checkbox is clicked', () => {
        const text = 'React';
        let isChecked = false;
        const toggleComplete = () => isChecked = true;
        const component = renderIntoDocument(
            <IdeaItem text={text} toggleComplete={toggleComplete}/>
        );
        const checkboxes = scryRenderedDOMComponentsWithTag(component, 'input');
        Simulate.click(checkboxes[0]);

        expect(isChecked).to.equal(true);
    });

    it('calls a callback when text is double clicked', () => {
        let text = 'React';
        const editItem = () => text = 'Redux';
        const component = renderIntoDocument(
            <IdeaItem text={text} editItem={editItem}/>
        );
        const label = component.refs.text;
        Simulate.doubleClick(label);

        expect(text).to.equal('Redux');
    });

});
