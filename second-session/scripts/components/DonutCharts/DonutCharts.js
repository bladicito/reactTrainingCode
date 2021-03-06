import React from 'react';


var DonutChart = React.createClass({

    componentDidMount : function() {
        var stats = this.gameStats(this.props.seasonMatchesData);

        var chartGeneral = {
                data            : stats.generalTeam(),
                title           : 'GAMES IN CURRENT SEASON FOR ' + this.props.currentClub,
                outlet          : document.getElementById('donut-chart-general'),
                isFirstRender   : true
            },
            chartWithPizarro = {
                data            : stats.withPizarro(),
                title           : 'SEASON ' + this.props.currentSeasonYear + ' FOR ' + this.props.currentClub + ' WITH PIZARRO ON THE PITCH',
                outlet          : document.getElementById('donut-chart-with-piza'),
                isFirstRender   : true
            },
            chartWithoutPizarro = {
                data            : stats.withoutPizarro(),
                title           : 'SEASON ' + this.props.currentSeasonYear + ' FOR ' + this.props.currentClub + ' WITHOUT PIZARRO ON THE PITCH',
                outlet          : document.getElementById('donut-chart-without-piza'),
                isFirstRender   : true
            }
        ;

        this.startChart(chartGeneral);
        this.startChart(chartWithPizarro);
        this.startChart(chartWithoutPizarro);

    },

    componentDidUpdate : function() {
        var stats = this.gameStats(this.props.seasonMatchesData);
        var chartGeneral = {
                data            : stats.generalTeam(),
                title           : 'GAMES IN CURRENT SEASON FOR ' + this.props.currentClub.toUpperCase(),
                outlet          : document.getElementById('donut-chart-general'),
                isFirstRender   : false
            },
            chartWithPizarro = {
                data            : stats.withPizarro(),
                title           : 'SEASON ' + this.props.currentSeasonYear + ' FOR ' + this.props.currentClub.toUpperCase() + ' WITH PIZARRO ON THE PITCH',
                outlet          : document.getElementById('donut-chart-with-piza'),
                isFirstRender   : false
            },
            chartWithoutPizarro = {
                data            : stats.withoutPizarro(),
                title           : 'SEASON ' + this.props.currentSeasonYear + ' FOR ' + this.props.currentClub.toUpperCase() + ' WITHOUT PIZARRO ON THE PITCH',
                outlet          : document.getElementById('donut-chart-without-piza'),
                isFirstRender   : false
            }
        ;

        this.startChart(chartGeneral);
        this.startChart(chartWithPizarro);
        this.startChart(chartWithoutPizarro);
    },

    startChart : function(data) {
        var _this = this;

        if(data.isFirstRender) {
            google.charts.setOnLoadCallback(function() {
                _this.drawChart(data);
            });
        } else {
            this.drawChart(data);
        }


    },

    drawChart : function(dataSeasons){
        var _this = this,
            data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Won',   dataSeasons.data.won],
                ['Lost',  dataSeasons.data.lost],
                ['Draw',  dataSeasons.data.draw]
            ]);

        var options = {
            title: dataSeasons.title,
            fontSize : 20,
            titleTextStyle:  {
                color : '#fff'
            },
            fontName    : 'Refrigerator Deluxe W01',
            pieHole: 0.2,
            backgroundColor: _this.props.currentClubColors.main,
            legend : {
                position: 'bottom',
                textStyle : {
                    color : '#fff'
                }
            },
            slices: _this.slidesChartColors(_this.props.currentClub)
        };

        var chart = new google.visualization.PieChart(dataSeasons.outlet);
        chart.draw(data, options);

    },



    gameStats : function(seasonData) {
        var _this        = this;

        return {
            withPizarro : function() {
                var matchesStats = {
                    draw: 0,
                    lost: 0,
                    won:0,
                    amountGames: 0
                };

                Object.keys(seasonData).map(function(currentValue) {
                    var currentGame = seasonData[currentValue],
                        result
                    ;

                    if (currentGame.playedMinutes !== '') {


                        result = currentGame.result.split(':');
                        if (currentGame.home === _this.props.currentClub) {
                            if (parseInt(result[0]) > parseInt(result[1])) {
                                matchesStats.won++;
                            }
                            if (parseInt(result[0]) < parseInt(result[1])) {
                                matchesStats.lost++;

                            } if (parseInt(result[0]) === parseInt(result[1])) {
                                matchesStats.draw++;
                            }
                        }

                        if (currentGame.away === _this.props.currentClub) {
                            if (parseInt(result[0]) < parseInt(result[1])) {
                                matchesStats.won++;
                            }
                            if (parseInt(result[0]) > parseInt(result[1])) {
                                matchesStats.lost++;

                            } if (parseInt(result[0]) === parseInt(result[1])) {
                                matchesStats.draw++;
                            }
                        }
                        matchesStats.amountGames++;
                    }
                });

                return matchesStats;

            },
            withoutPizarro : function () {
                var matchesStats = {
                    draw: 0,
                    lost: 0,
                    won:0,
                    amountGames: 0
                };

                Object.keys(seasonData).map(function(currentValue) {
                    var currentGame = seasonData[currentValue],
                        result
                    ;

                    if (currentGame.playedMinutes === '') {


                        result = currentGame.result.split(':');
                        if (currentGame.home === _this.props.currentClub) {
                            if (parseInt(result[0]) > parseInt(result[1])) {
                                matchesStats.won++;
                            }
                            if (parseInt(result[0]) < parseInt(result[1])) {
                                matchesStats.lost++;

                            } if (parseInt(result[0]) === parseInt(result[1])) {
                                matchesStats.draw++;
                            }
                        }

                        if (currentGame.away === _this.props.currentClub) {
                            if (parseInt(result[0]) < parseInt(result[1])) {
                                matchesStats.won++;
                            }
                            if (parseInt(result[0]) > parseInt(result[1])) {
                                matchesStats.lost++;

                            } if (parseInt(result[0]) === parseInt(result[1])) {
                                matchesStats.draw++;
                            }
                        }
                        matchesStats.amountGames++;
                    }
                });

                return matchesStats;

            },
            generalTeam : function() {
                var result;
                var matchesStats = {
                    draw: 0,
                    lost: 0,
                    won:0,
                    amountGames: 0
                };

                Object.keys(seasonData).map(function(currentValue) {
                    var currentGame = seasonData[currentValue];
                    result          = currentGame.result.split(':');


                    if (currentGame.home === _this.props.currentClub) {
                        if (parseInt(result[0]) > parseInt(result[1])) {
                            matchesStats.won++;
                        }
                        if (parseInt(result[0]) < parseInt(result[1])) {
                            matchesStats.lost++;

                        } if (parseInt(result[0]) === parseInt(result[1])) {
                            matchesStats.draw++;
                        }
                    }

                    if (currentGame.away === _this.props.currentClub) {
                        if (parseInt(result[0]) < parseInt(result[1])) {
                            matchesStats.won++;
                        }
                        if (parseInt(result[0]) > parseInt(result[1])) {
                            matchesStats.lost++;

                        } if (parseInt(result[0]) === parseInt(result[1])) {
                            matchesStats.draw++;
                        }
                    }
                    matchesStats.amountGames++;
                });

                return matchesStats;
            }
        }

    },

    slidesChartColors : function(club) {
        var colorOne,
            colorTwo,
            colorThree
        ;

        switch (club) {
            case 'Bayern Munich' :
                colorOne =  '#cd2823';
                colorTwo = '#002085';
                colorThree = '#ffffff';
                break;
            case 'Werder Bremen' :
                colorOne   = '#e55c14';
                colorTwo   = '#1c254e';
                colorThree = '#ffffff';
                break;
            case 'FC Chelsea' :
                colorOne   = '#d99808';
                colorTwo   = '#cddb44';
                colorThree = '#000000';

                break;

        }

        return  {
            0: { color: colorOne },
            1: { color: colorTwo },
            2: { color: colorThree}
        }

    },


    render: function() {
        return (
            <div className={'component component-donutchart ' + this.props.currentClubCss}>
                    <h2>How did Claudio and the team do during season {this.props.currentSeasonYear} ?</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="chart chart__donut" id="donut-chart-general"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="chart chart__donut" id="donut-chart-with-piza"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="chart chart__donut" id="donut-chart-without-piza"></div>
                        </div>
                    </div>
            </div>
        )
    }
});



export default DonutChart;