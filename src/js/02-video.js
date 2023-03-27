import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const playBackTime = 'videoplayer-current-time';
const localPlayBackTime = localStorage.getItem(playBackTime);


const onPlay = function (event) {
    localStorage.setItem(playBackTime, timeupdate.seconds)
};

player.on('play', throttle(onPlay, 1000));

player
  .setCurrentTime(localPlayBackTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });