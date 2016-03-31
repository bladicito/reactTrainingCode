import React from 'react';
import Utils from '../helpers';

var Summary = React.createClass({
    render: function() {
        return (
            <h1>
                <div className="date">
                    {Utils.prettyDate(this.props.date)}
                </div>
                <div className="calories">
                    {this.props.calories}
                </div>
                <div className="label">
                    calories left
                </div>
            </h1>
        )
    }
});

export default Summary;