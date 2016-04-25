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
                                    <span className="summary__numbers__item--label">MATCHES PLAYED :</span> {this.props.playedGames}
                                </div>
                                <div className="summary__numbers__item summary__numbers__item--goals">
                                    <span className="summary__numbers__item--label">GOALS</span> SCORED: {this.props.goals}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--assists">
                                    <span className="summary__numbers__item--label">ASSISTS IN SEASON:</span> {this.props.assists}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--yellow-cards">
                                    <span className="summary__numbers__item--label">YELLOW CARDS IN SEASON:</span> {this.props.yellowCards}
                                </div>
                                <div className="summary__numbers__item summary__numbers__item--red-cards">
                                    <span className="summary__numbers__item--label">RED CARDS IN SEASON:</span> {this.props.redCards}
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--played-minutes">
                                    <span className="summary__numbers__item--label">MINUTES PLAYED:</span> {this.props.playedMinutes}
                                </div>

                                <div className="summary__numbers__item  summary__numbers__item--goals-each-minute">
                                    <span className="summary__numbers__item--label">GOAL SCORED EACH </span> {Math.round(this.props.averageGoalsPerMinutes * 100) / 100} MINUTES
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--effectiveness">
                                    <span className="summary__numbers__item--label">EFFECTIVENESS:</span> {Math.round(this.props.averageGoalsPerMatch * 100) / 100} GOALS/GAME
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