import React from 'react';
import Utils from '../../helpers';

var YoutubePlayer = React.createClass({

    componentDidMount : function() {
        this.loadYoutubeApi();
        this.loadVideo();

    },

    componentDidUpdate : function() {
        this.loadVideo();
    },

    loadVideo : function() {
        var youtubeComponentHolder = document.getElementsByClassName('component-youtube-player');


        if (this.props.videoID !== 'none') {
            this.updateVideo(this.props.videoID);
        } else {
            this.cleanIframe();

        }
    },


    loadYoutubeApi : function () {
        var tag = document.createElement('script'),
            firstScriptTag
        ;

        tag.src = "https://www.youtube.com/iframe_api";

        firstScriptTag = document.getElementsByTagName('script')[0];

        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    },


    updateVideo : function(videoID) {
        var player,
            _this = this
        ;

            player = new YT.Player('youtube-player', {
                height: '100%',
                width: '100%',
                videoId: videoID,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }

            });

        function onPlayerReady(event) {
            document.getElementsByClassName('linked-components')[0].className += ' playing-video';
            event.target.playVideo();
        }

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.ENDED) {
                var classesCSS = document.getElementsByClassName('linked-components')[0].className;
                document.getElementsByClassName('linked-components')[0].className = classesCSS.replace('playing-video', '');
                _this.cleanYTHolder();
            }

        }
        function stopVideo() {
            player.stopVideo();
        }

    },

    cleanYTHolder : function() {
        this.props.videoIdReset();
    },

    cleanIframe : function() {
        document.getElementById('youtube-player').src = '';
        document.getElementsByClassName('component-youtube-player')[0].innerHTML = '';
        document.getElementsByClassName('component-youtube-player')[0].innerHTML = '<div id="youtube-player"></div>';
    },


    render: function() {
        return (
            <div className="component component-youtube-player">
                <div className="container">
                    <div id="youtube-player"></div>
                </div>
            </div>

        )
    }
});



export default YoutubePlayer;