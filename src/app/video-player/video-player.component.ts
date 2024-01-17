import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit{
  videoUrl='';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.post('https://xw2074rlul.execute-api.ap-south-1.amazonaws.com/dev/getVideo', '')
    // .subscribe(response => {
    //   this.videoUrl = JSON.stringify(response);
    // }, error => {

    // });
    this.videoUrl = `https://xw2074rlul.execute-api.ap-south-1.amazonaws.com/dev/video`;
  }

}
