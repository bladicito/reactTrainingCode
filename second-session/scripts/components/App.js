import React from 'react';
import Summary from './Summary';
import Controls from './Controls';
import EntryTable from './EntryTable';
import Utils from '../helpers';
import Entries from '../entries';

var App = React.createClass({
    getInitialState: function() {
        return {
            calories: 520,
            date: '2016-01-05',
            entries: {}
        }
    },

    componentDidMount: function() {
        this.state.entries = Entries;
        this.setState({entries: this.state.entries});
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