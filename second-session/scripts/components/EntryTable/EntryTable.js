import React from 'react';
import EntryTableRow from '../EntryTableRow/EntryTableRow'


var EntryTable = React.createClass({
    renderEntryTableRow: function(entry, index) {

        return (
            <EntryTableRow entry={this.props.seasonMatchesData[entry]} key={index}/>
        )
    },
    render: function() {
        var entries = this.props.seasonMatchesData.matches;
        return (
            <div className="component component-entry-table">
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="text">Date</th>
                            <th className="text">Local</th>
                            <th className="text">Visit</th>
                            <th className="text">Score</th>
                            <th className="text"><img src="build/svg/ball.svg" className="icon icon--goal"/></th>
                            <th className="text"><img src="build/svg/goal-icon.svg" className="icon icon--assist"/></th>
                            <th className="text"><img src="build/svg/yellow-card.svg" className="icon icon--yellow-card"/></th>
                            <th className="text"><img src="build/svg/yellow-red-card.svg" className="icon icon--yellow-card"/></th>
                            <th className="text"><img src="build/svg/red-card.svg" className="icon icon--yellow-card"/></th>
                            <th className="text"><i className="fa fa-clock-o"></i></th>
                            <th className="text"><i className="fa fa-arrow-right"></i>&nbsp;<i className="fa fa-clock-o"></i></th>
                            <th className="text"><i className="fa fa-arrow-left"></i>&nbsp;<i className="fa fa-clock-o"></i></th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(this.props.seasonMatchesData).map(this.renderEntryTableRow)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});

export default EntryTable;