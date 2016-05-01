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
            event.target.playVideo();
        }

        function onPlayerStateChange(event) {
            console.log(event);
            if (event.data == YT.PlayerState.ENDED) {
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
                <div id="youtube-player"></div>
            </div>

        )
    }
});



export default YoutubePlayer;