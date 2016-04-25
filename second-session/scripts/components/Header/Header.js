import React from 'react';
import Controls from '../Controls/Controls';

var Header = React.createClass({


    getControls : function(prevSeason, nextSeason) {
        return (
            <Controls prevSeason={prevSeason} nextSeason={nextSeason} updateDataSeason={this.props.updateDataSeason}/>
        )
    },

    render: function() {
        return (
            <div className={'component component-header ' + this.props.currentClubCss}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>CLAUDIO PIZARRO</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Season: {this.props.currentSeasonYear}</h2>

                        </div>
                        <div className="col-md-4">
                            <h2>CLUB: {this.props.currentClub}</h2>

                        </div>
                        <div className="col-md-4">
                            {this.getControls(this.props.prevSeason, this.props.nextSeason )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Header;