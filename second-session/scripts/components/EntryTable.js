import React from 'react';
import EntryTableRow from './EntryTableRow';

var EntryTable = React.createClass({
    renderEntryTableRow: function(key) {
        var entry = this.props.entries[key];

        if(this.props.date !== entry.date) {
            return false;
        }

        return (
            <EntryTableRow
                key={key}
                index={key}
                entry={this.props.entries[key]}
                deleteEntry={this.props.deleteEntry} />
        )
    },
    render: function() {
        return (
            <section className="home entries">
                <table>
                    <caption>Entries for {this.props.date}</caption>
                    <thead>
                    <tr>
                        <th className="text">Type</th>
                        <th className="text">Description</th>
                        <th className="number">Calories</th>
                        <th className="datetime">Time</th>
                        <th className="text">&nbsp;</th>
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