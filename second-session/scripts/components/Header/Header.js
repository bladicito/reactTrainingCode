import React from 'react';
import Controls from '../Controls/Controls';
import Menu from '../Menu/menu';

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
                        <div className="col-md-6">
                            <h1>CLAUDIO PIZARRO</h1>
                        </div>
                        <div className="col-md-6">
                            <Menu currentClubCss={this.props.currentClubCss}/>
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