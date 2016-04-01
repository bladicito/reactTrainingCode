import React from 'react';

var EntryTableRow = React.createClass({
    //propTypes: {
    //    index: React.PropTypes.string.isRequired,
    //    deleteEntry: React.PropTypes.func.isRequired,
    //    entry: React.PropTypes.shape({
    //        calories: React.PropTypes.number.isRequired,
    //        description: React.PropTypes.string.isRequired,
    //        time: React.PropTypes.string.isRequired,
    //        type: React.PropTypes.string.isRequired
    //    })
    //},

    render: function() {
        var entry = this.props.entry;

        return (
            <tr>
                <td className="text">Date</td>
                <td className="text">Local</td>
                <td className="text">Visit</td>
                <td className="datetime">Date</td>
                <td className="text">Score</td>
                <td className="text">Goals</td>
                <td className="text">Assists</td>
                <td className="text">Yellow Cards</td>
                <td className="text">Double Yellow Card</td>
                <td className="text">Red Card</td>
                <td className="text">Played Minutes</td>
                <td className="text">In Game on minute</td>
                <td className="text">Out on minute</td>
            </tr>
        )
    }
});

export default EntryTableRow;