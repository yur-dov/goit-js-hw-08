import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};
player.on('timeupdate', throttle(onPlay, 1000));