import React from 'react';
import MainPicture from '../MainPicture/MainPicture';
import Entries from     '../../entries';
import Helpers from       '../../helpers';


var Controls = React.createClass({
    handleClickNextSeason : function(evt) {
        evt.preventDefault();
        this.props.updateDataSeason(this.props.nextSeason);

    },

    handleClickPrevSeason: function(evt) {
        evt.preventDefault();
        this.props.updateDataSeason(this.props.prevSeason);

    },

    getPicture : function(sourcePicture, cssClass) {
        return (
            <MainPicture mainImageSrc={sourcePicture} cssClass={cssClass}/>
        )
    },

    render: function() {
        var imagePrev = Helpers.nameToImageShield(Entries[this.props.prevSeason].club),
            imageNext = Helpers.nameToImageShield(Entries[this.props.nextSeason].club)
        ;
        return (
            <div className="component component-controls">
                <a href="#" className="control control--left" onClick={this.handleClickPrevSeason}>
                    <i className="fa fa-angle-left controls__arrow controls__arrow--left"></i>
                    <img src={imagePrev} className="controls--shield"/>
                </a>
                <a href="#"  className="control control--right"  onClick={this.handleClickNextSeason}>
                    <img src={imageNext} className="controls--shield"/>
                    <i className="fa fa-angle-right controls__arrow controls__arrow--right"></i>
                </a>
            </div>
        )
    }
});

export default Controls;