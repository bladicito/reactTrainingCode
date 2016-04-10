import React from 'react';

var LineChart = React.createClass({

    componentDidMount : function() {
        this.startChart();
    },

    startChart : function() {

        var entries         = this.props.seasonMatchesData,
            seasonGoalsData = []
        ;
        google.charts.setOnLoadCallback(drawCurveTypes);


        for(var single in entries) {
            if(entries.hasOwnProperty(single)) {
                if (entries[single].goals.trim() !== '' &&  typeof(entries[single].goals) !== 'undefined') {
                    seasonGoalsData.push([new Date(entries[single].date), parseInt(entries[single].goals, 10)]);
                } else {
                    seasonGoalsData.push([new Date(entries[single].date), 0]);
                }
            }
        }


        function drawCurveTypes() {
            var data = new google.visualization.DataTable();
            data.addColumn('date', 'scored on');
            data.addColumn('number', 'Goals scored');



            data.addRows(seasonGoalsData);

            var options = {
                title: 'Goals scored during season 1990-2000',
                hAxis: {
                    title: 'Spieltag'
                },
                vAxis: {
                    title: 'Goals',
                    scaleType: 'continuous',
                    ticks: [0, 1, 2, 3, 4]
                },
                colors: ['#009252'],
                pointSize: 10,
                pointShape: 'circle',
                continuous: 'date'
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    },

    render: function() {
        return (
            <div className={'component component-linechart ' + this.props.currentClubCss}>
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