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
            currentSeason       : 'season6'
        }
    },

    setCurrentSeasons : function() {
        var entriesNames        = Object.keys(Entries),
            currentSeasonIndex  = entriesNames.indexOf(this.state.currentSeason),
            amountSeasons       = entriesNames.length
        ;


        if (currentSeasonIndex === 0) {
            this.state.prevSeason = entriesNames[amountSeasons - 1];
            this.state.nextSeason = entriesNames[currentSeasonIndex + 1];
        } else if(currentSeasonIndex === amountSeasons - 1) {
            this.state.prevSeason = entriesNames[currentSeasonIndex - 1];
            this.state.nextSeason = entriesNames[0];
        } else {
            this.state.prevSeason = entriesNames[currentSeasonIndex - 1];
            this.state.nextSeason = entriesNames[currentSeasonIndex + 1];
        }


        this.setState({
            prevSeason : this.state.prevSeason,
            nextSeason : this.state.nextSeason
        });

    },

    componentWillMount : function () {
        this.setCurrentSeasons();

        google.charts.load("current", {packages:["corechart"]});

        this.state.seasonData        = Entries[this.state.currentSeason];
        this.state.currentSeasonYear = Entries[this.state.currentSeason].year;
        this.state.mainImage         = Entries[this.state.currentSeason].mainImage;
        this.state.currentClub       = Entries[this.state.currentSeason].club;
        this.state.currentClubCss    = Entries[this.state.currentSeason].club.toLowerCase().replace(' ', '-');
        this.state.matchesData       = Entries[this.state.currentSeason].matches;
        this.state.currentClubColors = Utils.getClubColors(this.state.currentClub);


        this.initSummary(this.state.seasonData);
        this.setState({
            mainImage :     this.state.mainImage,
            seasonData:     this.state.seasonData,
            currentClub:    this.state.currentClub,
            currentClubCss: this.state.currentClubCss,
            matchesData:    this.state.matchesData,
            currentClubColors: this.state.currentClubColors
        });

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
                yellowCards ++;
            }
    
            if(typeof(entries[currentValue].redCards) !== 'undefined' && entries[currentValue].redCards.trim() !== '') {
                redCards ++;
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


    },

    updateDataSeason : function(newSeason) {
        this.state.currentSeason        = newSeason;
        this.state.currentSeasonYear    = Entries[this.state.currentSeason].year;
        this.state.seasonData           = Entries[this.state.currentSeason];
        this.state.mainImage            = Entries[this.state.currentSeason].mainImage;
        this.state.currentClub          = Entries[this.state.currentSeason].club;
        this.state.currentClubCss       = Entries[this.state.currentSeason].club.toLowerCase().replace(' ', '-');
        this.state.matchesData          = Entries[this.state.currentSeason].matches;
        this.state.currentClubColors    = Utils.getClubColors(this.state.currentClub);
        this.initSummary(this.state.seasonData);


        this.setCurrentSeasons();

        this.setState({
            mainImage           : this.state.mainImage,
            seasonData          : this.state.seasonData,
            defaultSeason       : this.state.defaultSeason,
            currentSeason       : this.state.currentSeason,
            currentClub         : this.state.currentClub,
            currentClubCss      : this.state.currentClubCss,
            currentSeasonYear   : this.state.currentSeasonYear,
            matchesData         : this.state.matchesData,
            currentClubColors   : this.state.currentClubColors

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
                         mainImage         = {this.state.mainImage}
                         season            = {this.state.season}
                         clubShieldPicture = {this.state.clubShieldPicture}
                         seasonData        = {this.state.seasonData}
                         currentSeason     = {this.state.currentSeason}
                         currentSeasonYear = {this.state.currentSeasonYear}
                         nextSeason        = {this.state.nextSeason}
                         prevSeason        = {this.state.prevSeason}
                         currentClub       = {this.state.currentClub}
                         currentClubCss    = {this.state.currentClubCss}
                         updateDataSeason  = {this.updateDataSeason}
                />
                <LineChart
                    seasonMatchesData = {this.state.matchesData}
                    currentClub       = {this.state.currentClub}
                    currentClubCss    = {this.state.currentClubCss}
                    currentSeason     = {this.state.currentSeason}
                    currentSeasonYear = {this.state.currentSeasonYear}
                    currentClubColors = {this.state.currentClubColors}
                />
                <DonutCharts
                    seasonMatchesData   = {this.state.matchesData}
                    currentClub         = {this.state.currentClub}
                    currentClubCss      = {this.state.currentClubCss}
                    currentSeasonYear   = {this.state.currentSeasonYear}
                    currentClubColors   = {this.state.currentClubColors}
                />
                <EntryTable
                    seasonMatchesData   = {this.state.matchesData}
                    currentClub         = {this.state.currentClub}
                    currentClubCss      = {this.state.currentClubCss}
                />
            </div>
        )
    }
});


export default App;