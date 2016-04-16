import React from 'react';

var LineChart = React.createClass({

    componentDidMount : function() {
        this.startChart();
    },
    componentWillReceiveProps : function() {
        this.startChart(false);
    },

    startChart : function(render) {

        var _this               = this,
            entries             = this.props.seasonMatchesData,
            clubColors          = this.props.currentClubColors,
            currentSeasonYear   = this.props.currentSeasonYear,
            currentClub         = this.props.currentClub,
            chartOutlet         = document.getElementById('chart_div'),
            seasonGoalsData     = (function() {
                var temp = [];

                for(var single in entries) {
                    if(entries.hasOwnProperty(single)) {
                        if (entries[single].goals.trim() !== '' &&  typeof(entries[single].goals) !== 'undefined') {
                            temp.push([new Date(entries[single].date), parseInt(entries[single].goals, 10)]);
                        } else {
                            temp.push([new Date(entries[single].date), 0]);
                        }
                    }
                }
                return temp;

            })(),

            helpers             = {
                isFirstRender :function() {
                    return typeof(render) === 'undefined';
                },
                drawChart :  function(seasonData, clubColors, currentSeasonYear, chartOutlet) {
                    var data = new google.visualization.DataTable();
                    data.addColumn('date', 'scored on');
                    data.addColumn('number', 'Goals scored');

                    data.addRows(seasonData);

                    var options = {
                        title: 'Goals scored during season ' + currentSeasonYear,
                        hAxis: {
                            title: 'Spieltag'
                        },
                        vAxis: {
                            title: 'Goals',
                            scaleType: 'continuous',
                            ticks: [0, 1, 2, 3, 4]
                        },
                        colors: [clubColors.main],
                        pointSize: 10,
                        pointShape: 'circle',
                        continuous: 'date'
                    };

                    var chart = new google.visualization.LineChart(chartOutlet);
                    chart.draw(data, options);
                }
            }
        ;





        if(helpers.isFirstRender()) {
            google.charts.setOnLoadCallback(function() {
                helpers.drawChart(seasonGoalsData, clubColors, currentSeasonYear, chartOutlet);
            });
        } else {
            helpers.drawChart(seasonGoalsData, clubColors, currentSeasonYear, chartOutlet);
        }




    },

    render: function() {
        return (
            <div className={'component component-linechart ' + this.props.currentClubCss} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="chart_div"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});



export default LineChart;