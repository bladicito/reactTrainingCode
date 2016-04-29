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
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            {this.getPicture(this.props.mainImage, 'summary__image', '/build/img/')}
                        </div>
                        <div className="col-md-8 col-xs-12">
                            
                            <div className="summary__numbers">
                                
                                <div className="summary__numbers__item summary__numbers__item--matches-played">
                                    <div className="summary__numbers__content">
                                        <span className="summary__numbers__item--label">MATCHES PLAYED :</span>
                                        <span className="summary__numbers__item--text">{this.props.playedGames}</span>
                                    </div>
                                </div>
                               
                                    
                               
                               
                                <div className="summary__numbers__item summary__numbers__item--goals">
                                    <div className="summary__numbers__content">
                                        <span className="summary__numbers__item--label">GOALS SCORED:</span>
                                        <span className="summary__numbers__item--text">{this.props.goals}</span>
                                    </div>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--assists">
                                    <div className="summary__numbers__content">
                                        <span className="summary__numbers__item--label">ASSISTS IN SEASON:</span>
                                        <span className="summary__numbers__item--text"> {this.props.assists}</span>
                                    </div>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--yellow-cards">
                                    <div className="summary__numbers__content">
                                        <span className="summary__numbers__item--label">YELLOW CARDS IN SEASON:</span>
                                        <span className="summary__numbers__item--text">{this.props.yellowCards}</span>
                                    </div>
                                </div>
                                <div className="summary__numbers__item summary__numbers__item--red-cards">
                                    <div className="summary__numbers__content">
                                        <span className="summary__numbers__item--label">RED CARDS IN SEASON:</span>
                                        <span className="summary__numbers__item--text"> {this.props.redCards}</span>
                                    </div>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--played-minutes">
                                    <div className="summary__numbers__content">
                                        <span className="summary__numbers__item--label">MINUTES PLAYED:</span>
                                        <span className="summary__numbers__item--text">{this.props.playedMinutes}</span>
                                    </div>
                                </div>

                                <div className="summary__numbers__item  summary__numbers__item--goals-each-minute">
                                    <div className="summary__numbers__content">
                                        <span className="summary__numbers__item--label">
                                            GOAL SCORED EACH
                                        </span>
                                        <span className="summary__numbers__item--text">
                                            {Math.round(this.props.averageGoalsPerMinutes * 100) / 100}
                                        </span>
                                        <span className="summary__numbers__item--label summary__numbers__item--label-second">
                                            MINUTES
                                        </span>
                                    </div>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--effectiveness">
                                    <div className="summary__numbers__content">
                                        <span className="summary__numbers__item--label">
                                            EFFECTIVENESS:
                                        </span>
                                        <span className="summary__numbers__item--text">
                                            {Math.round(this.props.averageGoalsPerMatch * 100) / 100}
                                        </span>
                                        <span className="summary__numbers__item--label summary__numbers__item--label-second">
                                            GOALS/GAME
                                        </span>
                                    </div>
                                </div>
                                <div className="summary__numbers__item  summary__numbers__item--club-logo">
                                    <div className="summary__numbers__content">
                                        {this.getPicture(Helpers.nameToImageShield(this.props.currentClub), 'summary-shield', '/build/svg/')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
});



export default Summary;