import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDownloadService } from '../service/image-download.service';
import { start } from 'repl';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  images: any[] = [];


  constructor(private imageDownloadService: ImageDownloadService) {}

  ngOnInit(): void {

    //let startDate = new Date();
    //let endDate = new Date(new Date().setDate(startDate.getDate() + 1));

    let startDate = new Date('2023-12-1');
    let endDate = new Date('2023-12-30');

    this.imageDownloadService.downloadImage(startDate, endDate)
    .subscribe(response => {
      this.images = response.files;
      console.log("success")
    }, error => {
      console.log("error :: ", error);
    });

  }

  isLoading(image: any) {
    return !image.loaded && image.url !== null; // Adjust logic as needed
  }

}
