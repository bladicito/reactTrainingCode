import React from 'react';
import Helpers from '../../helpers'
import MainImage from '../../components/MainPicture/MainPicture'
import ToolTip from '../../components/ToolTip/ToolTip'

var LineChart = React.createClass({

    componentDidMount : function() {
        this.startChart();
    },
    componentDidUpdate : function() {
        this.startChart(false);
    },

    setGoalsData : function(entries) {
        var temp = [],
            played,
            goals,
            date,
            against,
            goalsCurrentClub,
            goalsOtherClub,
            result,
            assists
        ;

        for(var single in entries) {
            if(entries.hasOwnProperty(single)) {
                result = entries[single].result.split(':');
                assists = entries[single].assists === '' && typeof(entries[single].assists) === 'undefined' ? 0 : parseInt(entries[single].assists, 10);

                if(this.props.currentClub === entries[single].home) {
                    goalsCurrentClub = result[0];
                    goalsOtherClub   = result[1];
                } else {
                    goalsCurrentClub = result[1];
                    goalsOtherClub   = result[0];
                }

                if (typeof(entries[single].goalsVideos) !== 'undefined') {

                }

                played = parseInt(entries[single].playedMinutes, 10);
                goals  = entries[single].goals.trim() !== '' &&  typeof(entries[single].goals) !== 'undefined' ? parseInt(entries[single].goals, 10) : 0;
                date   = new Date(entries[single].date);
                against= entries[single].home === this.props.currentClub ? entries[single].away : entries[single].home;


                if(this.props.currentViewport === 4) {
                    temp.push([goals, date, this.customToolTipHTML(goals, played, against,  date, goalsCurrentClub, goalsOtherClub)]);
                } else {
                    temp.push([date, goals, this.customToolTipHTML(goals, played, against,  date, goalsCurrentClub, goalsOtherClub)]);
                }



            }
        }
        return temp;

    },

    drawChart : function(seasonData, clubColors, currentSeasonYear, chartOutlet) {

        var data = new google.visualization.DataTable(),
            _this = this
        ;

        if(this.props.currentViewport === 4) {
            data.addColumn('number', 'GOALS');
            data.addColumn('date', 'Date');
            data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});

        } else {
            data.addColumn('date', 'Date');
            data.addColumn('number', 'GOALS');
            data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
        }

        data.addRows(seasonData);

        if(this.props.currentViewport === 4) {
            var arrayDates = [];
            data.getDistinctValues(1).map(function(current) {
                arrayDates.push(new Date(current.getFullYear() + '/' + current.getMonth() + '/' + current.getDay()));
            });
        }


        var options = {
            title           : 'GOALS SCORED IN ' + currentSeasonYear,
            titleTextStyle  : {
                color       : clubColors.main,
                fontSize    : 35,
                bold        : false
            },
            curveType       : 'function',
            legend          : {
                position    : 'bottom'
            },
            axisTitlesPosition: 'in',

            colors      : [clubColors.main, clubColors.secondary],
            pointSize   : 15,
            pointShape  : 'circle',
            continuous  : 'date',
            fontName    : 'Refrigerator Deluxe W01',
            fontSize    : 25,
            height      : this.props.currentViewport === 4 ? 1600 : 400,
            lineWidth   : 1,
            hAxis   : {
                title: 'MATCHES',
                scaleType   : 'continuous',
                titleTextStyle : {
                    color: clubColors.main
                },
                textPosition:'out',
                slantedText: false,
                maxAlternation: 8,
                showTextEvery: 1,
                baselineColor: clubColors.main

            },
            vAxis   : {
                title       : 'GOALS',
                titleTextStyle : {
                    color: clubColors.main
                },

                scaleType   : 'continuous',
                ticks       : this.props.currentViewport === 4 ? arrayDates : [0,1,2,3,4,5],
                textStyle   : {
                    color   : clubColors.main
                }
            },
            tooltip : {
                isHtml: true

            }

        };

        var chart = new google.visualization.LineChart(chartOutlet);

        chart.draw(data, options);


        google.visualization.events.addListener(chart, 'select', selectHandler);

        function selectHandler(e) {

            if (typeof (chart.getSelection()) !== 'undefined' && chart.getSelection().length !== 0) {
                var matchEntry = _this.props.seasonMatchesData[(chart.getSelection()[0].row + 1)];
                if (typeof (matchEntry.goalsVideos) !== 'undefined') {
                    _this.testingEvent(_this.props.seasonMatchesData[chart.getSelection()[0].row + 1]);
                }
            }
        }
    },

    testingEvent : function(selectedPoint) {

        if (selectedPoint.hasOwnProperty('goalsVideos')) {
            this.props.videoIdUpdate(selectedPoint);
        }
    },

    customToolTipHTML : function(goals, played, against, date, goalsCurrentClub, goalsOtherClub) {
        var shieldSrc           = Helpers.nameToImageShield(against),
            formattedDate       = Helpers.prettyDate(date),
            currentClubShield   = Helpers.nameToImageShield(this.props.currentClub),
            noteNotPlayedMatch  = '',
            scoredGoals         = '',
            html                = '',
            _this               = this
        ;

        if (!played) {
            noteNotPlayedMatch =
                `<div class="row">
                    <div class="col-md-12">
                        <div class="tool__tip__row tool__tip__data--not-played-match">
                            Claudio did not play this game
                        </div>  
                    </div>
                </div>`
        }

        if (played) {
            scoredGoals =   `<div class="row tool__tip__row ">
                                <div class="col-md-12 tool__tip__data tool__tip__data--text">
                                    Claudio Scored ${goals} times
                                </div>
                            </div>`
        }



        html = `<div class="tool__tip">
                    <div class="row tool__tip__row">
                        <div class="col-md-12 tool__tip__data tool__tip__data--header">
                            On ${formattedDate} against ${against}
                        </div>
                    </div>
                    ${scoredGoals}
                    <div class="row tool__tip__row tool__tip__data--scorer">
                         <div class="col-md-6 team team--one">
                             <img src="build/svg/${shieldSrc}" class="tool__tip__img">
                             <div class="team--score">
                                    ${goalsOtherClub}
                             </div>
                        </div>
                        <div class="col-md-6 team team--two">
                             <img src="build/svg/${currentClubShield}" class="tool__tip__img">
                             <div class="team--score">
                                    ${goalsCurrentClub}
                             </div>
                        </div>
                    </div>
                    ${noteNotPlayedMatch}
                </div>`;


        return html;
    },



    startChart : function(render) {

        var _this               = this,
            clubColors          = this.props.currentClubColors,
            currentSeasonYear   = this.props.currentSeasonYear,
            currentClub         = this.props.currentClub,
            chartOutlet         = document.getElementById('chart_div'),
            seasonGoalsData     = this.setGoalsData(this.props.seasonMatchesData),
            isFirstRender       = typeof(render) === 'undefined'
        ;


        if(isFirstRender) {
            google.charts.setOnLoadCallback(function() {
                _this.drawChart(seasonGoalsData, clubColors, currentSeasonYear, chartOutlet);
            });
        } else {
            _this.drawChart(seasonGoalsData, clubColors, currentSeasonYear, chartOutlet);
        }

    },

    render: function() {
        return (
            <div className={'component component-linechart ' + this.props.currentClubCss} >
                    <div className="row">
                        <div className="col-md-12">
                            <div id="chart_div"></div>
                        </div>
                    </div>
            </div>
        )
    }
});



export default LineChart;