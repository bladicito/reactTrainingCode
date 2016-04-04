import React from 'react';

import MainPicture from '../MainPicture/MainPicture';
import Controls from    '../controls/controls';
import Entries from     '../../entries';


var Summary = React.createClass({

    componentDidMount : function() {
        this.startChart();

    },


    startChart : function() {
        google.charts.load('current', {packages: ['corechart', 'line']});
        google.charts.setOnLoadCallback(drawCurveTypes);



        var seasonGoalsData =  [],
            entries = Entries[this.props.currentSeason].matches
        ;



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

    getPicture : function(sourcePicture, cssClass) {
        return (
            <MainPicture mainImageSrc={sourcePicture} cssClass={cssClass}/>
        )
    },

    getControls : function(prevSeason, nextSeason) {
        return (
            <Controls prevSeason={prevSeason} nextSeason={nextSeason}/>
        )
    },

    render: function() {
        return (
            <div className={this.props.club + ' component component-summary'}>
                <div className="summary__title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Claudio Pizarro</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Season: {this.props.season}</h2>

                            </div>
                            <div className="col-md-4">
                                <h2>Club: {this.props.club.replace('-', ' ')}</h2>

                            </div>
                            <div className="col-md-4">
                                {this.getControls(this.props.prevSeason, this.props.nextSeason )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summary__content">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {this.getPicture(this.props.mainPicture, 'summary__image')}
                        </div>
                        <div className="col-md-6">
                            <div className="summary__numbers">
                                <div className="summary__numbers__item summary__numbers__item--goals">
                                    <span className="summary__numbers__item--label">Goals</span> Scored: {this.props.goals}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--assists">
                                    <span className="summary__numbers__item--label">Assists in season:</span> {this.props.assists}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--yellow-cards">
                                    <span className="summary__numbers__item--label">Yellow cards in Season:</span> {this.props.yellowCards}
                                </div>
                                <div className="summary__numbers__item summary__numbers__item--red-cards">
                                    <span className="summary__numbers__item--label">Red cards in Season:</span> {this.props.redCards}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--played-minutes">
                                    <span className="summary__numbers__item--label">Minutes played:</span> {this.props.playedMinutes}
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            {this.getPicture(this.props.clubShieldPicture, 'summary-shield')}
                        </div>
                    </div>
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



export default Summary;