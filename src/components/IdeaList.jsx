/**
 * Created by matthew on 20/05/2017.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import IdeaItem from './IdeaItem';

export default class IdeaList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getItems() {
        if (this.props.ideas) {
            return this.props.ideas.filter(
                (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
            );
        }
        return [];
    }

    render() {
        return <section className="main">
            <ul className="todo-list">
                {this.getItems().map(item =>
                    <IdeaItem key={item.get('text')}
                              text={item.get('text')}/>
                )}
            </ul>
        </section>
    }
};
