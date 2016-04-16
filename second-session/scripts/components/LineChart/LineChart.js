import React from 'react';

var LineChart = React.createClass({

    componentDidMount : function() {
        this.startChart();
    },
    componentDidUpdate : function() {
        this.startChart(false);
    },

    setGoalsData : function(entries) {
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

    },

    drawChart : function(seasonData, clubColors, currentSeasonYear, chartOutlet) {
        var data = new google.visualization.DataTable();

        data.addColumn('date', 'scored on');
        data.addColumn('number', 'Goals scored');

        data.addRows(seasonData);

        var options = {
            title   : 'Goals scored during season ' + currentSeasonYear,

            colors      : [clubColors.main],
            pointSize   : 10,
            pointShape  : 'circle',
            continuous  : 'date',
            hAxis   : {
                title: 'Spieltag'
            },
            vAxis   : {
                title       : 'Goals',
                scaleType   : 'continuous',
                ticks       : [0, 1, 2, 3, 4]
            }
        };

        var chart = new google.visualization.LineChart(chartOutlet);
        chart.draw(data, options);
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