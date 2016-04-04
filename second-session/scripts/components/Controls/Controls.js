import React from 'react';
import MainPicture from '../MainPicture/MainPicture';

var Controls = React.createClass({
    handleClickNextSeason : function(evt) {
        evt.preventDefault();

    },

    handleClickPrevSeason: function(evt) {
        evt.preventDefault();


    },

    getPicture : function(sourcePicture, cssClass) {
        return (
            <MainPicture mainImageSrc={sourcePicture} cssClass={cssClass}/>
        )
    },

    render: function() {
        return (
            <div className="component component-controls">
                <a href="#" className="control control--left" onClick={this.handleClickPrevSeason}>
                    <i className="fa fa-angle-left controls__arrow controls__arrow--left"></i>
                    <img src={this.props.prevSeason} className="controls--shield"/>
                </a>
                <a href="#"  className="control control--right"  onClick={this.handleClickNextSeason}>
                    <img src={this.props.nextSeason} className="controls--shield"/>
                    <i className="fa fa-angle-right controls__arrow controls__arrow--right"></i>
                </a>
            </div>
        )
    }
});

export default Controls;