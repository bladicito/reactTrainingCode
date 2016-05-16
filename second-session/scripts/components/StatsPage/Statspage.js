import React            from 'react';
import Summary          from '../../components/Summary/Summary';
import YoutubePlayer    from '../../components/YoutubePlayer/YoutubePlayer';
import LineChart        from '../../components/LineChart/LineChart';
import DonutCharts      from '../../components/DonutCharts/DonutCharts';
import EntryTable       from '../../components/EntryTable/EntryTable';
import Entries          from '../../entries';
import Utils            from '../../helpers';


var StatsPage = React.createClass({

    componentWillMount: function() {
        this.dataSeason                   = this.initSummary(Entries['season18']);
        this.dataSeason.currentClub       = 'Bayern Munich';
        this.dataSeason.currentClubCss    = this.dataSeason.currentClub.toLowerCase().replace(' ', '-');
        this.dataSeason.mainImage         = 'bayern2014_1_1.jpg';
        this.dataSeason.currentSeasonYear = '2013 - 2014';
        this.dataSeason.matchesData       = Entries['season18'].matches;
        this.dataSeason.currentClubColors = Utils.getClubColors(this.dataSeason.currentClub);


    },

    initSummary : function(seasonData) {
        var data = {
                assists         : 0,
                goals           : 0,
                yellowCards     : 0,
                redCards        : 0,
                playedMinutes   : 0,
                entries         : seasonData.matches,
                counterGames    : 0
        };


        Object.keys(data.entries).map(function (currentValue) {

            if (typeof(data.entries[currentValue].assists) !== 'undefined' && data.entries[currentValue].assists.trim() !== '') {
                data.assists += parseInt(data.entries[currentValue].assists)
            }

            if (typeof(data.entries[currentValue].goals) !== 'undefined' && data.entries[currentValue].goals.trim() !== '') {
                data.goals += parseInt(data.entries[currentValue].goals)
            }

            if (typeof(data.entries[currentValue].yellowCard) !== 'undefined' && data.entries[currentValue].yellowCard.trim() !== '') {
                data.yellowCards++;
            }

            if (typeof(data.entries[currentValue].redCards) !== 'undefined' && data.entries[currentValue].redCards.trim() !== '') {
                data.redCards++;
            }

            if (typeof(data.entries[currentValue].playedMinutes) !== 'undefined' && data.entries[currentValue].playedMinutes.trim() !== '') {
                data.playedMinutes += parseInt(data.entries[currentValue].playedMinutes);
                data.counterGames++;
            }

        });

        data.averageGoalsPerMinutes = data.playedMinutes / data.goals;
        data.averageGoalsPerMatch  =  data.goals / data.counterGames;

        return data;
    },

    render: function() {
        console.log(this.dataSeason);

        return (
            <div className="component component-sumary-page">
                <div className="linked-components">
                    <Summary goals             = {this.dataSeason.goals}
                             assists           = {this.dataSeason.assists}
                             playedGames       = {this.dataSeason.counterGames}
                             averageGoalsPerMinutes = {this.dataSeason.averageGoalsPerMinutes}
                             yellowCards       = {this.dataSeason.yellowCards}
                             redCards          = {this.dataSeason.redCards}
                             playedMinutes     = {this.dataSeason.playedMinutes}
                             mainImage         = {this.dataSeason.mainImage}
                             clubShieldPicture = {this.dataSeason.clubShieldPicture}
                             currentClubCss    = {this.dataSeason.currentClubCss}
                             updateDataSeason  = {this.updateDataSeason}
                             videoIdReset      = {this.videoIdReset}
                             averageGoalsPerMatch = {this.dataSeason.averageGoalsPerMatch}
                    />
                    <YoutubePlayer
                        videoID         = {this.dataSeason.youtubeVideoID}
                        videoIdReset    = {this.videoIdReset}
                    />
                </div>

                <LineChart
                    seasonMatchesData = {this.dataSeason.matchesData}
                    currentClub       = {this.dataSeason.currentClub}
                    currentClubCss    = {this.dataSeason.currentClubCss}
                    currentSeason     = {this.dataSeason.currentSeason}
                    currentSeasonYear = {this.dataSeason.currentSeasonYear}
                    currentClubColors = {this.dataSeason.currentClubColors}
                    videoIdUpdate     = {this.videoIdUpdate}
                    currentViewport   = {this.dataSeason.currentViewport}

                />
                <DonutCharts
                    seasonMatchesData   = {this.dataSeason.matchesData}
                    currentClub         = {this.dataSeason.currentClub}
                    currentClubCss      = {this.dataSeason.currentClubCss}
                    currentSeasonYear   = {this.dataSeason.currentSeasonYear}
                    currentClubColors   = {this.dataSeason.currentClubColors}
                />

            </div>
        );
    }

});

export default StatsPage;