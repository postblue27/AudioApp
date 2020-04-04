import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, OnChanges, DoCheck } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { TrackService } from '../_services/track.service';

@Component({
  selector: 'app-bottomPlayer',
  templateUrl: './bottomPlayer.component.html',
  styleUrls: ['./bottomPlayer.component.css']
})
export class BottomPlayerComponent implements OnInit{
  faCoffee = faCoffee;
  faPlay = faPlay;
  faPause = faPause;
  faUndoAlt = faUndoAlt;
  faRedoAlt = faRedoAlt;
  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.addListeners();
    this.subscribeToTrackUpdate();
  }

  subscribeToTrackUpdate() {
    const audio = document.getElementById('player_a') as HTMLAudioElement;
    const performerNameSpan = document.getElementById('performerNameSpan');
    const trackNameSpan = document.getElementById('trackNameSpan');
    this.trackService.activeTrackUpdated.subscribe(newActiveTrack => {
      if (newActiveTrack !== undefined) {
        audio.src = newActiveTrack.url;
        performerNameSpan.textContent = newActiveTrack.performerName;
        trackNameSpan.textContent = newActiveTrack.trackName;
      }
    });
    this.trackService.pauseTrack.subscribe(() => {
      audio.pause();
    });
    this.trackService.resumeTrack.subscribe(() => {
      audio.play();
    });
  }

  addListeners() {
    const audio = document.getElementById('player_a') as HTMLAudioElement;

    const playPauseDiv = document.getElementById('playPauseDiv');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    const undoDiv = document.getElementById('undoDiv');
    const redoDiv = document.getElementById('redoDiv');

    const progressLine = document.getElementById('progress');
    const progressBar = document.getElementsByClassName('progressBar')[0];
    const playerTimer = document.getElementById('playerTimer');

    pauseIcon.style.display = 'none';

    playPauseDiv.addEventListener('click', () => {
      if (audio.src !== '') {
        if (!audio.paused) {
          audio.pause();
          playIcon.style.display = '';
          pauseIcon.style.display = 'none';
        } else {
          audio.play();
          playIcon.style.display = 'none';
          pauseIcon.style.display = '';
        }
      }
    });
    audio.addEventListener('play', () => {
      playIcon.style.display = 'none';
      pauseIcon.style.display = '';

      const dur = Math.floor(audio.duration);
      let durmin;
      if (Math.floor(dur / 60) < 10) {
        durmin = '0' + Math.floor(dur / 60).toString();
      } else {
        durmin = Math.floor(dur / 60).toString();
      }
      let dursec;
      if (Math.floor(dur % 60) < 10) {
        dursec = '0' + Math.floor(dur % 60).toString();
      } else {
        dursec = Math.floor(dur % 60).toString();
      }
      playerTimer.children[1].textContent = durmin + ':' + dursec;
    });

    audio.addEventListener('timeupdate', () => {
      progressLine.style.width = audio.currentTime / audio.duration * 100 + '%';
      playerTimer.children[0].textContent = Math.floor(audio.currentTime).toString();

      const curTime = Math.floor(audio.currentTime);
      let curTimeMin;
      if (Math.floor(curTime / 60) < 10) {
        curTimeMin = '0' + Math.floor(curTime / 60).toString();
      } else {
        curTimeMin = Math.floor(curTime / 60).toString();
      }
      let curTimeSec;
      if (Math.floor(curTime % 60) < 10) {
        curTimeSec = '0' + Math.floor(curTime % 60).toString();
      } else {
        curTimeSec = Math.floor(curTime % 60).toString();
      }
      playerTimer.children[0].textContent = curTimeMin + ':' + curTimeSec;
    });

    undoDiv.addEventListener('click', () => {
      audio.currentTime -= 10;
    });
    redoDiv.addEventListener('click', () => {
      audio.currentTime += 10;
    });

    progressBar.addEventListener('mousedown', (e: MouseEvent) => {
      if (audio.src !== '') {
        // console.log(e.clientX, e.clientY);
        const progressBarOffsets = progressBar.getBoundingClientRect();
        const length = progressBarOffsets.right - progressBarOffsets.left;
        const diff = e.clientX - progressBarOffsets.left;
        const res = diff / length;
        // console.log('length: ', length, 'diff', diff, 'res', res, '%');
        audio.currentTime = audio.duration * res;
      }
    });
  }
}
