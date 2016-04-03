import React from 'react';
import Shield from './Shield';
import Helpers from '../helpers';

var EntryTableRow = React.createClass({
    nameToImageShield : function(name) {
        var pathToImage = Helpers.nameToImageShield(name);
        return (
            <Shield imageSource={pathToImage} altText={name}/>
        )
    },


    render: function() {
        var entry = this.props.entry;

        return (
            <tr>
                <td className="text">{entry.date}</td>
                <td className="text">{this.nameToImageShield(entry.home)}</td>
                <td className="text">{this.nameToImageShield(entry.away)}</td>
                <td className="text">{entry.result}</td>
                <td className="text">{entry.goals}</td>
                <td className="text">{entry.assists}</td>
                <td className="text">{entry.yellowCard}</td>
                <td className="text">{entry.doubleYellowCard}</td>
                <td className="text">{entry.redCard}</td>
                <td className="text">{entry.playedMinutes}</td>
                <td className="text">{entry.inGameOnMin}</td>
                <td className="text">{entry.outGameOnMin}</td>
            </tr>
        )
    }
});

export default EntryTableRow;