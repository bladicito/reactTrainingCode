import React from 'react';

import MainPicture from '../MainPicture/MainPicture';
import Controls from    '../controls/controls';
import Entries from     '../../entries';
import Helpers from '../../helpers'


var Summary = React.createClass({

    componentDidMount : function() {

    },

    getPicture : function(sourcePicture, cssClass, carpet) {
        return (
            <MainPicture mainImageSrc={carpet + sourcePicture} cssClass={cssClass}/>
        )
    },

    render: function() {
        return (
            <div className={'component component-summary ' + this.props.currentClubCss}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            {this.getPicture(this.props.mainImage, 'summary__image', '/build/img/')}
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="summary__numbers">
                                <div className="summary__numbers__item summary__numbers__item--matches-played">
                                    <span className="summary__numbers__item--label">MATCHES PLAYED :</span>&nbsp;<span className="summary__numbers__item--text">{this.props.playedGames}</span>
                                </div>
                                <div className="summary__numbers__item summary__numbers__item--goals">
                                    <span className="summary__numbers__item--label">GOALS SCORED:</span>&nbsp;<span className="summary__numbers__item--text">{this.props.goals}</span>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--assists">
                                    <span className="summary__numbers__item--label">ASSISTS IN SEASON:</span>&nbsp;<span className="summary__numbers__item--text"> {this.props.assists}</span>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--yellow-cards">
                                    <span className="summary__numbers__item--label">YELLOW CARDS IN SEASON:</span> &nbsp;<span className="summary__numbers__item--text">{this.props.yellowCards}</span>
                                </div>
                                <div className="summary__numbers__item summary__numbers__item--red-cards">
                                    <span className="summary__numbers__item--label">RED CARDS IN SEASON:</span>&nbsp;<span className="summary__numbers__item--text"> {this.props.redCards}</span>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--played-minutes">
                                    <span className="summary__numbers__item--label">MINUTES PLAYED:</span>&nbsp;<span className="summary__numbers__item--text">{this.props.playedMinutes}</span>
                                </div>

                                <div className="summary__numbers__item  summary__numbers__item--goals-each-minute">
                                    <span className="summary__numbers__item--label">GOAL SCORED EACH &nbsp;<span className="summary__numbers__item--text"></span> {Math.round(this.props.averageGoalsPerMinutes * 100) / 100} MINUTES</span>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--effectiveness">
                                    <span className="summary__numbers__item--label">EFFECTIVENESS:</span>&nbsp;<span className="summary__numbers__item--text">{Math.round(this.props.averageGoalsPerMatch * 100) / 100} GOALS/GAME</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-xs-12">
                            {this.getPicture(Helpers.nameToImageShield(this.props.currentClub), 'summary-shield', '/build/svg/')}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});



export default Summary;