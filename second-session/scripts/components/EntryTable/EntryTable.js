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
            <div className={'component component-entry-table ' + this.props.currentClubCss}>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="header__data header__data--date">DATE</th>
                        <th className="header__data header__data--local">LOCAL</th>
                        <th className="header__data header__data--visit">VISIT</th>
                        <th className="header__data header__data--score">SCORE</th>
                        <th className="header__data header__data--goals">GOALS</th>
                        <th className="header__data header__data--assists">ASSISTS</th>
                        <th className="header__data header__data--cards-y">YELLOW CARDS</th>
                        <th className="header__data header__data--cards-ry">2X YELLOW CARDS</th>
                        <th className="header__data header__data--cards-r">RED CARDS</th>
                        <th className="header__data header__data--played-mins">MINUTES PLAYED</th>
                        <th className="header__data header__data--in-min-in">IN GAME MIN</th>
                        <th className="header__data header__data--in-min-out">OUT GAME MIN</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(this.props.seasonMatchesData).map(this.renderEntryTableRow)}
                    </tbody>
                </table>
            </div>
        )
    }
});

export default EntryTable;