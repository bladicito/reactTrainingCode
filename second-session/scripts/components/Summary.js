import React from 'react';
import Utils from '../helpers';

var Summary = React.createClass({
    render: function() {
        return (
            <h1>
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
            </h1>
        )
    }
});

export default Summary;