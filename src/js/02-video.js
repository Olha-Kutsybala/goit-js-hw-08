import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const playBackTime = 'videoplayer-current-time';
const localPlayBackTime = localStorage.getItem(playBackTime);


function onPlay(evt) {
  // console.log(evt);
  localStorage.setItem(playBackTime, evt.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localPlayBackTime)
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':

        break;

      default:
        break;
    }
  });

