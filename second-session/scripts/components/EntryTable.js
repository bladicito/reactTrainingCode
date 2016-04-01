import React from 'react';
import EntryTableRow from './EntryTableRow';


var EntryTable = React.createClass({
    renderEntryTableRow: function(entry, index) {
        return (
            <EntryTableRow entry={entry} key={index}/>
        )
    },
    render: function() {

        return (
            <section className="home entries">
                <table>
                    <caption>Entries for {this.props.date}</caption>
                    <thead>
                    <tr>
                        <th className="text">Date</th>
                        <th className="text">Local</th>
                        <th className="text">Visit</th>
                        <th className="datetime">Date</th>
                        <th className="text">Score</th>
                        <th className="text">Goals</th>
                        <th className="text">Assists</th>
                        <th className="text">Yellow Cards</th>
                        <th className="text">Double Yellow Card</th>
                        <th className="text">Red Card</th>
                        <th className="text">Played Minutes</th>
                        <th className="text">In Game on minute</th>
                        <th className="text">Out on minute</th>

                    </tr>
                    </thead>
                    <tbody>
                    {console.log(this.props.entries)}
                    </tbody>
                </table>
            </section>
        )
    }
});

export default EntryTable;