import React from 'react';
import Shield from '../Shield/Shield'
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
import Helpers from '../../helpers';
import $ from "jquery";







var EntryTable = React.createClass({

    nameToImageShield : function(name) {
        var pathToImage = Helpers.nameToImageShield(name);
        return (
            <Shield imageSource={'build/svg/'+pathToImage} altText={name}/>
        )
    },

    getAmountMatches : function() {
        var amount = 0;
        Object.keys(this.props.seasonMatchesData).map(function(current) {
            amount++;
        });

        return amount
    },

    componentDidUpdate : function() {
        
    },


    componentWillMount : function() {

        
    },



    componentDidMount : function() {


    },



    render: function() {
        var dataList = this.props.seasonMatchesData,
            _this    = this,
            tableWidth = parseInt($('#wrapper').css('width'),10) - 40,
            cellWidth  = Math.floor(tableWidth/ 12)
        ;

        
        
        if (this.props.currentViewport === 4) {
            cellWidth = 130;
        }

        return (
            <div className={'component component-entry-table ' + this.props.currentClubCss}>
                <div className="container-fluid">

                    <h2>Matches Stats {this.props.currentViewport}</h2>
                    <Table
                        rowHeight       = {50}
                        headerHeight    = {70}
                        rowsCount       = {_this.getAmountMatches()}
                        height          = {500}
                        width           = {tableWidth}
                        {...this.props}>
                        <Column
                            header  = {<Cell>DATE</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].date}
                                        </Cell>
                                    )}
                            fixed={true}
                            width={cellWidth}
                        />
                        <Column
                            header  = {<Cell>GOALS</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].goals}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />
                        <Column
                            header  = {<Cell>ASSISTS</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].assists}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />
                        <Column
                            header  = {<Cell>HOME</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {_this.nameToImageShield(dataList[rowIndex + 1].home)}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />
                        <Column
                            header  = {<Cell>RESULT</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].result}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />
                        <Column
                            header  = {<Cell>AWAY</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                          {_this.nameToImageShield(dataList[rowIndex + 1].away)}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />
                        <Column
                            header  = {<Cell>YELLOW CARDS</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].yellowCard}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />



                        <Column
                            header  = {<Cell>RED CARDS</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].redCard}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />

                        <Column
                            header  = {<Cell>2X YELLOW CARD</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].doubleYellowCard}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />

                        <Column
                            header  = {<Cell>PLAYED MINS</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].playedMinutes}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />

                        <Column
                            header  = {<Cell>IN GAME IN</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].inGameOnMin !=='' ? dataList[rowIndex + 1].inGameOnMin + "'" : '' }
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />

                        <Column
                            header  = {<Cell>OUT IN</Cell>}
                            align   = "center"
                            cell    = {({rowIndex, ...props}) => (
                                        <Cell {...props}>
                                         {dataList[rowIndex + 1].outGameOnMin}
                                        </Cell>
                                    )}
                            fixed={false}
                            width={cellWidth}
                        />

                    </Table>
                </div>
            </div>
        )
    }
});

export default EntryTable;