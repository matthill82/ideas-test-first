import React from 'react';
import IdeaList from './IdeaList'

export default class IdeaApp extends React.Component {
    render() {
        return <div>
            <section className="todoapp">
                <IdeaList ideas={this.props.ideas} filter={this.props.filter}/>
            </section>
        </div>
    }
};