'use strict';

var session = nodecg.Replicant('twitchalerts');
var $panel = $bundle.filter('.twitchalerts');

session.on('change', function (old, newValue) {
  if (newValue) {
    $panel.find('.sessionInactive').hide();
    $panel.find('.sessionActive').show();
  } else {
    $panel.find('.sessionActive').hide();
    $panel.find('.sessionInactive').show();
  }
});
