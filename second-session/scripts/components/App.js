import React from 'react';
import Summary from './Summary';
import Controls from './Controls';
import EntryTable from './EntryTable';
import Utils from '../helpers.js';

var App = React.createClass({
    getInitialState: function() {
        return {
            calories: 520,
            date: '2016-01-05',
            entries: {
                entry1: {
                    type: 'Food',
                    description: 'Bagel',
                    calories: 400,
                    date: '2016-01-05',
                    time: '12:34'
                },
                entry2: {
                    type: 'Food',
                    description: 'OJ',
                    calories: 120,
                    date: '2016-01-05',
                    time: '12:34'
                }
            }
        }
    },
    deleteEntry: function(key) {
        delete this.state.entries[key];
        this.setState({entries : this.state.entries});
    },

    setDate: function(offset) {
        var date = new Date(this.state.date);
        date.setUTCDate(date.getUTCDate() + offset);

        this.state.date = Utils.storeDate(date);
        this.setState({date: this.state.date});
    },


    render: function() {
        return (
            <section className="home">
                <Summary date={this.state.date} calories={this.state.calories} />
                <Controls setDate={this.setDate}/>
                <EntryTable
                    date={this.state.date}
                    entries={this.state.entries}
                    deleteEntry={this.deleteEntry} />
            </section>
        )
    }
});

export default App;