import React from           'react';
import Summary from         '../Summary/Summary';
import EntryTable from      '../EntryTable/EntryTable';
import LineChart from       '../LineChart/LineChart';
import DonutCharts from     '../DonutCharts/DonutCharts';
import YoutubePlayer from   '../YoutubePlayer/YoutubePlayer';
import Header from          '../Header/Header';
import Utils from           '../../helpers';
import Firebase from        'firebase'
import defaultSeason from   '../../entries'


var App = React.createClass({
    getInitialState: function() {
        var _this = this;

        console.log(defaultSeason);

        return {
            currentSeason       : 'season18',
            prevSeason          : 'season17',
            nextSeason          : 'season19',
            youtubeVideoID      : 'none',
            currentClub         : 'Bayern Munich',
            currentClubCss      : 'bayern-munich',
            matchesData         : defaultSeason.matches

        }

    },

    setCurrentSeasons : function(newCurrentSeason) {
        var entriesNames        = this.state.availableSeasons,
            currentSeasonIndex  = entriesNames.indexOf(newCurrentSeason),
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

        this.updateSeasonData(newCurrentSeason, false);

    },

    

    componentWillMount : function () {
        var _this = this;
        this.firebaseRef = Utils.getDbRef();
        this.firebaseRef.once('value', function(dataSnapshot) {
            var newSeason = dataSnapshot.val()[_this.state.currentSeason];
            this.getAvailableSeasons(dataSnapshot.val());
            this.updateSeasonData(newSeason, true);

        }.bind(this));

    },

    getAvailableSeasons : function(dataSeasons) {
        var elements = Object.keys(dataSeasons),
            temp = [],
            sortNumbers = function sortNumber(a,b) {
                return a - b;
            }
        ;

        elements.map(function(currentItem) {
            temp.push(parseInt(currentItem.replace('season', '')));
        });

        var newArray = [];
        temp.sort(sortNumbers);
        temp.map((current) => {
            newArray.push('season' + current);
        });

        this.setState({
            availableSeasons : newArray
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




    updateSeasonData : function(newSeason, initialLoad) {
        if (initialLoad) {
            google.charts.load("current", {packages:["corechart"]});
        }

        if (typeof(newSeason) === 'string') {
            var _this = this;
            this.firebaseRef = Utils.getDbRef(newSeason);
            this.firebaseRef.once('value', function(dataSnapshot) {
                var newSeason = dataSnapshot.val();


                this.state.currentSeasonYear = newSeason.year;
                this.state.mainImage         = newSeason.mainImage;
                this.state.currentClub       = newSeason.club;
                this.state.currentClubCss    = newSeason.club.toLowerCase().replace(' ', '-');
                this.state.matchesData       = newSeason.matches;
                this.state.currentClubColors = Utils.getClubColors(this.state.currentClub);


                this.initSummary(newSeason);
                this.setState({
                    mainImage           : this.state.mainImage,
                    currentClub         : this.state.currentClub,
                    currentClubCss      : this.state.currentClubCss,
                    matchesData         : this.state.matchesData,
                    currentClubColors   : this.state.currentClubColors,
                    youtubeVideoID      : 'none'
                });

            }.bind(this));

        } else {
            this.state.currentSeasonYear = newSeason.year;
            this.state.mainImage         = newSeason.mainImage;
            this.state.currentClub       = newSeason.club;
            this.state.currentClubCss    = newSeason.club.toLowerCase().replace(' ', '-');
            this.state.matchesData       = newSeason.matches;
            this.state.currentClubColors = Utils.getClubColors(this.state.currentClub);


            this.initSummary(newSeason);
            this.setState({
                mainImage           : this.state.mainImage,
                currentClub         : this.state.currentClub,
                currentClubCss      : this.state.currentClubCss,
                matchesData         : this.state.matchesData,
                currentClubColors   : this.state.currentClubColors,
                youtubeVideoID      : 'none'
            });

        }
    },

    videoIdUpdate : function(goalData) {

        this.setState({
            youtubeVideoID:goalData.goalsVideos.allGoals
        })
    },

    videoIdReset : function() {

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
                    updateDataSeason    = {this.setCurrentSeasons}
                />
                <div className="linked-components">
                    <Summary goals             = {this.state.goals}
                             assists           = {this.state.assists}
                             playedGames       = {this.state.playedGames}
                             averageGoalsPerMinutes = {this.state.averageGoalsPerMinutes}
                             yellowCards       = {this.state.yellowCards}
                             redCards          = {this.state.redCards}
                             playedMinutes     = {this.state.playedMinutes}
                             mainImage         = {this.state.mainImage}
                             season            = {this.state.season}
                             clubShieldPicture = {this.state.clubShieldPicture}
                             currentSeason     = {this.state.currentSeason}
                             currentSeasonYear = {this.state.currentSeasonYear}
                             nextSeason        = {this.state.nextSeason}
                             prevSeason        = {this.state.prevSeason}
                             currentClub       = {this.state.currentClub}
                             currentClubCss    = {this.state.currentClubCss}
                             updateDataSeason  = {this.updateSeasonData}
                             averageGoalsPerMatch = {this.state.averageGoalsPerMatch}
                    />
                    <YoutubePlayer 
                        videoID         = {this.state.youtubeVideoID}
                        videoIdReset    = {this.videoIdReset}
                    />
                </div>



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