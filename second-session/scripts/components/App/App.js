import React from       'react';
import Summary from     '../Summary/Summary';
import EntryTable from  '../EntryTable/EntryTable';
import LineChart from  '../LineChart/LineChart';
import DonutCharts from  '../DonutCharts/DonutCharts';
import Utils from       '../../helpers';
import Entries from     '../../entries';


var App = React.createClass({
    getInitialState: function() {
        return {
            defaultSeason       : 'season6',
            currentSeason       : 'season6',
            nextSeason          : 'season7',
            prevSeason          : 'season5',
            currentSeasonYear   : '1999 - 2000',
            currentClub         : 'Werder Bremen',
            currentClubCss      : 'Werder Bremen'.toLowerCase().replace(' ', '-'),
            goals               : '',
            assists             : '',
            games               : '',
            yellowCards         : '',
            redCards            : '',
            toDate              : '',
            playedMinutes       : '',
            mainPicture         : 'build/img/werder1999.png',
            club                : 'werder-bremen',
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

        google.charts.load("current", {packages:["corechart"]});





        this.initSummary(this.state.seasonData);
        this.setState({
            seasonData: this.state.seasonData,
            defaultSeason: this.state.defaultSeason,
            currentSeason: this.state.currentSeason
        });

    },

    updateDataSeason : function(newSeason) {
        this.state.currentSeason    = newSeason;
        this.state.seasonData       = Entries[this.state.currentSeason];
        this.initSummary(this.state.seasonData);

        this.updateCharts();

        this.setState({
            seasonData      : this.state.seasonData,
            defaultSeason   : this.state.defaultSeason,
            currentSeason   : this.state.currentSeason
        });

    },

    updateCharts : function() {
        DonutCharts.startChartGeneral();
        DonutCharts.startChartWithoutPiza();
        DonutCharts.startChartWithPiza();
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
                         currentClub       = {this.state.currentClub}
                         currentClubCss    = {this.state.currentClubCss}
                         updateDataSeason  = {this.updateDataSeason}
                />
                <LineChart  seasonMatchesData={seasonMatchesData} currentClub={this.state.currentClub} currentClubCss={this.state.currentClubCss} currentSeason/>
                <DonutCharts seasonMatchesData={seasonMatchesData} currentClub={this.state.currentClub} currentClubCss={this.state.currentClubCss} currentSeasonYear={this.state.currentSeasonYear}/>
                <EntryTable seasonMatchesData={seasonMatchesData} currentClub={this.state.currentClub} currentClubCss={this.state.currentClubCss}/>
            </div>
        )
    }
});


export default App;