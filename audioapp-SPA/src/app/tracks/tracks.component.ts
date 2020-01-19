import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  constructor(private http: HttpClient) { }
  tracks: any;
  //pla: HTMLAudioElement;
  ngOnInit() {
    this.getTracks();
  }

  getTracks() {
    this.http.get('http://localhost:5000/api/audio').subscribe(response => {
      this.tracks = response;
    }, error => {
      console.log(error);
    });
  }

  /*assignOnclick() {
    const trx = document.getElementsByClassName('tr');
    for(let i = 0; i < trx.length; i++){
      for(const track of this.tracks){
        if(track.)
      }
      trx[i].addEventListener('click', (trx[i].url) => {

      }));
    }
    function handleClick(this: HTMLElement){
      let pla: HTMLAudioElement;
      pla = <HTMLAudioElement>document.getElementById('player_a');
      pla.src =  
    }
  }*/

  
}
