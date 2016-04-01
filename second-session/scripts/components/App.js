import React from 'react';
import Summary from './Summary';
import Controls from './Controls';
import EntryTable from './EntryTable';
import Utils from '../helpers';
import Entries from '../entries';

var App = React.createClass({
    getInitialState: function() {
        return {
            goals       : '',
            assists     : '',
            games       : '',
            yellowCards : '',
            redCards    : '',
            toDate      : '',
            playedMinutes : '',
            entries     : {}
        }
    },

    initSummary : function(entries) {
        var assists     = 0,
            goals       = 0,
            yellowCards = 0,
            redCards    = 0,
            playedMinutes = 0
        ;

        for(var x = 0; x < entries.length; x++) {
            if(typeof(entries[x].assists) !== 'undefined' && entries[x].assists.trim() !== '') {
              assists += parseInt(entries[x].assists)
            }

            if(typeof(entries[x].goals) !== 'undefined' && entries[x].goals.trim() !== '') {
                goals += parseInt(entries[x].goals)
            }

            if(typeof(entries[x].yellowCard) !== 'undefined' && entries[x].yellowCard.trim() !== '') {
                yellowCards += parseInt(entries[x].yellowCard)
            }

            if(typeof(entries[x].redCards) !== 'undefined' && entries[x].redCards.trim() !== '') {
                redCards += parseInt(entries[x].redCards)
            }

            if(typeof(entries[x].redCards) !== 'undefined' && entries[x].redCards.trim() !== '') {
                redCards += parseInt(entries[x].redCards)
            }

            if(typeof(entries[x].playedMinutes) !== 'undefined' && entries[x].playedMinutes.trim() !== '') {
                playedMinutes += parseInt(entries[x].playedMinutes)
            }


        }

        this.setState({assists: assists});
        this.setState({goals: goals});
        this.setState({yellowCards: yellowCards});
        this.setState({redCards: redCards});
        this.setState({playedMinutes: playedMinutes});
    },

    componentDidMount: function() {
        this.state.entries = Entries;
        this.initSummary(this.state.entries);
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
                <Summary goals         ={this.state.goals}
                         assists       ={this.state.assists}
                         yellowCards   ={this.state.yellowCards}
                         redCards      ={this.state.redCards}
                         playedMinutes ={this.state.playedMinutes}
                />
                <Controls setDate={this.setDate}/>
                <EntryTable entries={this.state.entries}/>
            </section>
        )
    }
});

export default App;