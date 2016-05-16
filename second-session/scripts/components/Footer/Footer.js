import React from 'react';


var Footer = React.createClass({
    render: function() {
        return (
            <div className={'component component-footer ' + this.props.currentClubCss}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                This is not an official web page.
                            </p>
                            <h3>
                                a ton thanks to:
                            </h3>
                            <ul>
                                <li>
                                    <a href="http://www.bundesliga.de" target="_blank">
                                        <img src="build/svg/bundesliga.svg" className="footer__image"/>
                                    </a>

                                </li>
                                <li>
                                    <a href="http://www.premierleague.com/en-gb.html" target="_blank">
                                        <img src="build/svg/premier-league.svg" className="footer__image"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.wikipedia.com" target="_blank">
                                        <img src="build/svg/wikipedia.svg" className="footer__image"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.transfermarkt.com" target="_blank">
                                        <img src="build/svg/transfermarkt.png" className="footer__image"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Footer;