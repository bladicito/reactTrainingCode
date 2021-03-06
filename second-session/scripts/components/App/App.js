import React from           'react';
import Summary from         '../Summary/Summary';
import EntryTable from      '../EntryTable/EntryTable';
import LineChart from       '../LineChart/LineChart';
import DonutCharts from     '../DonutCharts/DonutCharts';
import YoutubePlayer from   '../YoutubePlayer/YoutubePlayer';
import ToolTip from          '../ToolTip/ToolTip';
import Header from          '../Header/Header';
import Intro from          '../Intro/Intro';
import Footer from          '../Footer/Footer';
import Utils from           '../../helpers';
import Entries from         '../../entries';
import Firebase from        'firebase'


var App = React.createClass({
    getInitialState: function() {
        var indicatorHolder         = document.createElement('div');
        indicatorHolder.className   = 'state-indicator';
        document.body.appendChild(indicatorHolder);
        var viewPort = parseInt(window.getComputedStyle(indicatorHolder).getPropertyValue('z-index'), 10);
        this.setViewportObserver(indicatorHolder);
        return {
            currentSeason       : 'season18',
            currentViewport     : viewPort
        }
    },

    setViewportObserver : function(indicatorHolder) {

        var _this = this;
        window.addEventListener('resize', function() {
            var viewport = parseInt(window.getComputedStyle(indicatorHolder).getPropertyValue('z-index'), 10);


            _this.setState({
                currentViewport : viewport
            });

        });


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
            currentClubColors: this.state.currentClubColors,
            youtubeVideoID   : 'none'
        });


    },

    initSummary : function(seasonData) {
        var assists         = 0,
            goals           = 0,
            yellowCards     = 0,
            redCards        = 0,
            playedMinutes   = 0,
            entries         = seasonData.matches,
            counterGames    = 0
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
                playedMinutes += parseInt(entries[currentValue].playedMinutes);
                counterGames++;
            }
            
        });

        this.setState({
            assists         : assists,
            goals           : goals,
            yellowCards     : yellowCards,
            redCards        : redCards,
            playedMinutes   : playedMinutes,
            playedGames     : counterGames,
            averageGoalsPerMinutes: playedMinutes / goals,
            averageGoalsPerMatch : goals / counterGames
        });

    },



    componentDidMount: function() {


    },

    updateDataSeason : function(newSeason) {

        //this.updateState(newSeason);
        var classesCSS = document.getElementsByClassName('linked-components')[0].className;
        document.getElementsByClassName('linked-components')[0].className = classesCSS.replace('playing-video', '');

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
            currentClubColors   : this.state.currentClubColors,
            youtubeVideoID      : 'none'

        });

    },

    updateState : function(newSeason, initialLoad) {
        if (initialLoad) {
            google.charts.load("current", {packages:["corechart"]});

        }



        this.state.seasonData        = newSeason;
        this.state.currentSeasonYear = newSeason.year;
        this.state.mainImage         = newSeason.mainImage;
        this.state.currentClub       = newSeason.club;
        this.state.currentClubCss    = newSeason.club.toLowerCase().replace(' ', '-');
        this.state.matchesData       = newSeason.matches;
        this.state.currentClubColors = Utils.getClubColors(this.state.currentClub);


        this.initSummary(newSeason);
        this.setState({
            mainImage           : this.state.mainImage,
            seasonData          : this.state.seasonData,
            currentClub         : this.state.currentClub,
            currentClubCss      : this.state.currentClubCss,
            matchesData         : this.state.matchesData,
            currentClubColors   : this.state.currentClubColors,
            youtubeVideoID      : 'none'
        });

    },

    videoIdUpdate : function(goalData) {

        this.setState({
            youtubeVideoID:goalData.goalsVideos.allGoals
        })
    },

    videoIdReset : function() {
        var classesCSS = document.getElementsByClassName('linked-components')[0].className;
        document.getElementsByClassName('linked-components')[0].className = classesCSS.replace('playing-video', '');
        this.setState({
            youtubeVideoID: 'none'
        })
    },

    render: function() {

        return (
            <div className="main-claudio-pizarro">
                <Header
                    currentClubCss      = {this.state.currentClubCss}
                    currentSeasonYear   = {this.state.currentSeasonYear}
                    currentClub         = {this.state.currentClub}
                    prevSeason          = {this.state.prevSeason}
                    nextSeason          = {this.state.nextSeason}
                    updateDataSeason    = {this.updateDataSeason}
                />
                <Intro introVideoID="TYO1BXr5ytY"/>
                
                {this.props.children}

                <Footer currentClubCss      = {this.state.currentClubCss}></Footer>
            </div>
        )
    }
});


export default App;