define(function(require) {
  'use strict';

  var React = require('react');
  var HistoryManager = require('backend/HistoryManager');
  var PlayAllButton = require('components/shared/playall-button');
  var NoTrack = require('components/shared/no-track');
  var Track = require('components/shared/track');
  var L10nSpan = require('components/shared/l10n-span');

  var HistoryContainer = React.createClass({
    getInitialState: function() {
      return {
        tracks: []
      };
    },

    componentDidMount: function() {
      // TODO
      // With DB support, we should make sure stored tracks can be
      // reflected here
      HistoryManager.on('history-updated', (tracks) => {
        this.setState({
          tracks: tracks
        });
      });
    },

    render: function() {
      /* jshint ignore:start */
      var tracks = this.state.tracks;
      var noTracksDiv;

      if (tracks.length === 0) {
        noTracksDiv = <NoTrack/>;
      }

      return (
        <div className="histories-slot">
          <div className="header clearfix">
            <h1>
              <i className="fa fa-fw fa-history"></i>
              <L10nSpan l10nId="history_header"/>
            </h1>
            <div className="control-buttons">
              <PlayAllButton data={tracks}/>
            </div>
          </div>
          <div className="history-container">
            {noTracksDiv}
            {tracks.map(function(track) {
              return <Track data={track}/>;
            })}
          </div>
        </div>
      );
      /* jshint ignore:end */
    }
  });

  return HistoryContainer;
});
