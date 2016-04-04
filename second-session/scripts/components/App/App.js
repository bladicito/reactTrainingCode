import React from       'react';
import Summary from     '../Summary/Summary';
import EntryTable from  '../EntryTable/EntryTable';
import Utils from       '../../helpers';
import Entries from     '../../entries';


var App = React.createClass({
    getInitialState: function() {
        return {
            defaultSeason       : 'season5',
            currentSeason       : 'season5',
            goals               : '',
            assists             : '',
            games               : '',
            yellowCards         : '',
            redCards            : '',
            toDate              : '',
            playedMinutes       : '',
            mainPicture         : 'build/img/alianza.png',
            clubShieldPicture   : 'build/svg/werder.svg' ,
            club                : 'werder-bremen',
            nextSeason          : 'build/svg/bayern.svg',
            prevSeason          : 'build/svg/werder.svg',
            season              : '3',
            entries             : {}
        }
    },

    initSummary : function(seasonData) {
        var assists         = 0,
            goals           = 0,
            yellowCards     = 0,
            redCards        = 0,
            playedMinutes   = 0,
            entries         = seasonData.matches
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
        this.state.seasonData       = Entries[this.state.defaultSeason];
        this.state.currentSeason    = this.state.defaultSeason;


        this.initSummary(this.state.seasonData);
        this.setState({
            seasonData: this.state.seasonData,
            defaultSeason: this.state.defaultSeason,
            currentSeason: this.state.currentSeason
        });
    },




    render: function() {
        var seasonMatchesData = Entries[this.state.currentSeason].matches;

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
                         seasonData        = {this.state.seasonData}
                         currentSeason     = {this.state.currentSeason}
                         nextSeason        = {this.state.nextSeason}
                         prevSeason        = {this.state.prevSeason}

                />
                <EntryTable seasonMatchesData={seasonMatchesData}/>
            </div>
        )
    }
});





export default App;