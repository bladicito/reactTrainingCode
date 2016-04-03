import React from 'react';
import EntryTableRow from './EntryTableRow';


var EntryTable = React.createClass({
    renderEntryTableRow: function(entry, index) {
        return (
            <EntryTableRow entry={this.props.entries[entry]} key={index}/>
        )
    },
    render: function() {
        return (
            <section className="home entries">
                <table>
                    <thead>
                    <tr>
                        <th className="text">Date</th>
                        <th className="text">Local</th>
                        <th className="text">Visit</th>
                        <th className="text">Score</th>
                        <th className="text"><img src="build/svg/ball.svg" className="icon icon--goal"/></th>
                        <th className="text"><img src="build/svg/goal-icon.svg" className="icon icon--assist"/></th>
                        <th className="text"><img src="build/svg/yellow-card.svg" className="icon icon--yellow-card"/></th>
                        <th className="text"><img src="build/svg/yellow-red-card.svg" className="icon icon--yellow-card"/></th>
                        <th className="text"><img src="build/svg/red-card.svg" className="icon icon--yellow-card"/></th>
                        <th className="text">Played Minutes</th>
                        <th className="text">In Game on minute</th>
                        <th className="text">Out on minute</th>

                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(this.props.entries).map(this.renderEntryTableRow)}
                    </tbody>
                </table>
            </section>
        )
    }
});

export default EntryTable;