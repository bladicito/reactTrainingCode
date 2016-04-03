import React from 'react';
import Utils from '../helpers';
import MainPicture from './MainPicture';
import Entries from '../entries';

var Summary = React.createClass({

    componentDidMount : function() {
        this.startChart();

    },


    startChart : function() {
        google.charts.load('current', {packages: ['corechart', 'line']});
        google.charts.setOnLoadCallback(drawCurveTypes);

        var seasonGoalsData =  [];



        for(var single in Entries) {
            if(Entries.hasOwnProperty(single)) {
                if (Entries[single].goals.trim() !== '' &&  typeof(Entries[single].goals) !== 'undefined') {
                    seasonGoalsData.push([new Date(Entries[single].date), parseInt(Entries[single].goals, 10)]);
                } else {
                    seasonGoalsData.push([new Date(Entries[single].date), 0]);
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
    render: function() {
        return (
            <div className={this.props.club + ' mod-summary'}>
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
                                <a href="#">
                                    <i className="fa fa-angle-left"></i>
                                    {this.getPicture(this.props.clubShieldPicture, 'summary-shield-header')}
                                </a>
                                <a href="#">
                                    {this.getPicture('build/svg/bayern.svg', 'summary-shield-header')}
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summary__content">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {this.getPicture(this.props.mainPicture)}
                        </div>
                        <div className="col-md-6">
                            <div className="goals">
                                Goals Scored: {this.props.goals}
                            </div>
                            <div className="assists">
                                Assists in season: {this.props.assists}
                            </div>
                            <div className="yellow-cards">
                                Yellow cards in Season: {this.props.yellowCards}
                            </div>
                            <div className="red-cards">
                                Red cards in Season: {this.props.redCards}
                            </div>
                            <div className="played-minutes">
                                Minutes played: {this.props.playedMinutes}
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