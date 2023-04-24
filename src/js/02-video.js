import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const PLAY_BACK_TIME = 'videoplayer-current-time';
const localPlayBackTime = localStorage.getItem(PLAY_BACK_TIME) || 0;


function onPlay({seconds}) {
  localStorage.setItem(PLAY_BACK_TIME, seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localPlayBackTime);
  


