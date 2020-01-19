import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottomPlayer',
  templateUrl: './bottomPlayer.component.html',
  styleUrls: ['./bottomPlayer.component.css']
})
export class BottomPlayerComponent implements OnInit {
  faCoffee = faCoffee;
  faPlay = faPlay;
  faPause = faPause;
  @Input() activeTrackFromApp: any;
  constructor() { }

  ngOnInit() {
    this.addListeners();
  }

  ngOnChanges(changes: SimpleChanges) {
    const audio = document.getElementById('player_a') as HTMLAudioElement;
    const performerNameSpan = document.getElementById('performerNameSpan');
    const trackNameSpan = document.getElementById('trackNameSpan');
    if (this.activeTrackFromApp !== undefined) {
      audio.src = this.activeTrackFromApp.url;
      performerNameSpan.textContent = this.activeTrackFromApp.performerName;
      trackNameSpan.textContent = this.activeTrackFromApp.trackName;
    }
  }

  addListeners() {
    const audio = document.getElementById('player_a') as HTMLAudioElement;

    const playPauseDiv = document.getElementById('playPauseDiv');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

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
    });
  }
}
