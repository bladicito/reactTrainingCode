import React from 'react';
import Utils from '../../helpers';

var ToolTip = React.createClass({

    componentDidMount : function() {
        
    },
    
    render: function() {
        return (
            <div className={'component component-tooltip ' + this.props.currentClubCss}>
                <div className="row tool__tip__row">
                    <div className="col-md-12 tool__tip__data tool__tip__data--header">
                        On {this.props.formattedDate} against {this.props.against}
                    </div>
                </div>

                <div className="row tool__tip__row tool__tip__data--scorer">
                     <div className="col-md-6 col-xs-6 team team--one">
                         <img src={'build/svg/' + this.props.shieldSrc } className="tool__tip__img" />
                         <div className="team--score">
                                {this.props.goalsOtherClub}
                         </div>
                    </div>
                    <div className="col-md-6 col-xs-6 team team--two">
                         <img src={'build/svg/' + this.props.currentClubShield } className="tool__tip__img" />
                         <div className="team--score">
                                {this.props.goalsCurrentClub}
                         </div>
                    </div>
                </div>
                <div className="row tool__tip__row">
                    <div className="col-md-12">
                        <div className=" tool__tip__data tool__tip__data--text">
                            Claudio did not play this game
                        </div>
                    </div>
                </div>


                <div className="row tool__tip__row">
                    <div className="col-md-12">
                        <div className="tool__tip__data tool__tip__data--text">
                        Claudio Scored {this.props.goals} times
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
});



export default ToolTip;