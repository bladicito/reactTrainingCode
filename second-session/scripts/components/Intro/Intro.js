import React from 'react';


var Intro = React.createClass({

    render :function() {
        return (
            <div className={'component component-intro'}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Testing Intro Module</h1>
                    </div>
                </div>
            </div>
        );
    }
});

export default Intro;