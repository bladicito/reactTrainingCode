import React from 'react';


var DonutChart = React.createClass({

    componentDidMount : function() {
        var stats = this.gameStats(this.props.seasonMatchesData);

        var chartGeneral = {
                data            : stats.generalTeam(),
                title           : 'Games in current season for ' + this.props.currentClub,
                outlet          : document.getElementById('donut-chart-general'),
                isFirstRender   : true
            },
            chartWithPizarro = {
                data            : stats.withPizarro(),
                title           : 'Season ' + this.props.currentSeasonYear + ' for ' + this.props.currentClub + ' with Pizarro on the pitch',
                outlet          : document.getElementById('donut-chart-with-piza'),
                isFirstRender   : true
            },
            chartWithoutPizarro = {
                data            : stats.withoutPizarro(),
                title           : 'Season ' + this.props.currentSeasonYear + ' for ' + this.props.currentClub + ' without Pizarro on the pitch',
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
                title           : 'Games in current season for ' + this.props.currentClub,
                outlet          : document.getElementById('donut-chart-general'),
                isFirstRender   : false
            },
            chartWithPizarro = {
                data            : stats.withPizarro(),
                title           : 'Season ' + this.props.currentSeasonYear + ' for ' + this.props.currentClub + ' with Pizarro on the pitch',
                outlet          : document.getElementById('donut-chart-with-piza'),
                isFirstRender   : false
            },
            chartWithoutPizarro = {
                data            : stats.withoutPizarro(),
                title           : 'Season ' + this.props.currentSeasonYear + ' for ' + this.props.currentClub + ' without Pizarro on the pitch',
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
       console.log(dataSeasons);
        var _this = this,
            data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Won',   dataSeasons.data.won],
                ['Lost',  dataSeasons.data.lost],
                ['Draw',  dataSeasons.data.draw]
            ]);

        var options = {
            title: dataSeasons.title,
            titleTextStyle:  {
                color : '#fff'
            },
            pieHole: 0.4,
            backgroundColor: _this.props.currentClubColors.main,
            legend : {
                position: 'bottom',
                textStyle : {
                    color : '#fff'
                }
            }
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


    render: function() {
        return (
            <div className={'component component-donutchart ' + this.props.currentClubCss}>
                <div className="container">
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
            </div>
        )
    }
});



export default DonutChart;