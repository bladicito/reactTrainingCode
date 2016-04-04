import React from       'react';
import Summary from     '../Summary/Summary';
import EntryTable from  '../EntryTable/EntryTable';
import Utils from       '../../helpers';
import Entries from     '../../entries';

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
            mainPicture : 'build/img/werder1999.png',
            clubShieldPicture: 'build/svg/werder.svg' ,
            club        : 'werder-bremen',
            nextSeason  : 'build/svg/bayern.svg',
            prevSeason  : 'build/svg/werder.svg',
            season      : '3',
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

        Object.keys(entries).map(function(currentValue) {
            if(typeof(entries[currentValue].assists) !== 'undefined' && entries[currentValue].assists.trim() !== '') {
                assists += parseInt(entries[currentValue].assists)
            }
    
            if(typeof(entries[currentValue].goals) !== 'undefined' && entries[currentValue].goals.trim() !== '') {
                goals += parseInt(entries[currentValue].goals)
            }
    
            if(typeof(entries[currentValue].yellowCard) !== 'undefined' && entries[currentValue].yellowCard.trim() !== '') {
                yellowCards += parseInt(entries[currentValue].yellowCard)
            }
    
            if(typeof(entries[currentValue].redCards) !== 'undefined' && entries[currentValue].redCards.trim() !== '') {
                redCards += parseInt(entries[currentValue].redCards)
            }
    
            if(typeof(entries[currentValue].redCards) !== 'undefined' && entries[currentValue].redCards.trim() !== '') {
                redCards += parseInt(entries[currentValue].redCards)
            }
    
            if(typeof(entries[currentValue].playedMinutes) !== 'undefined' && entries[currentValue].playedMinutes.trim() !== '') {
                playedMinutes += parseInt(entries[currentValue].playedMinutes)
            }
            
        });
        

        this.setState({
            assists         : assists,
            goals           : goals,
            yellowCards     : yellowCards,
            redCards        : redCards,
            playedMinutes   : playedMinutes
        });

    },

    componentDidMount: function() {
        this.state.entries = Entries;
        this.initSummary(this.state.entries);
        this.setState({entries: this.state.entries});;
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
            <div className="main-claudio-pizarro">
                <Summary goals             = {this.state.goals}
                         assists           = {this.state.assists}
                         yellowCards       = {this.state.yellowCards}
                         redCards          = {this.state.redCards}
                         playedMinutes     = {this.state.playedMinutes}
                         mainPicture       = {this.state.mainPicture}
                         club              = {this.state.club}
                         season            = {this.state.season}
                         clubShieldPicture = {this.state.clubShieldPicture}
                         entries           = {this.state.entries}
                         nextSeason        = {this.state.nextSeason}
                         prevSeason        = {this.state.prevSeason}

                />
                <EntryTable entries={this.state.entries}/>
            </div>
        )
    }
});





export default App;