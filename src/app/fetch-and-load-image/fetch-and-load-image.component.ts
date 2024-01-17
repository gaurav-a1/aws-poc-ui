import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageDownloadService } from '../service/image-download.service';


@Component({
  selector: 'app-fetch-and-load-image',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fetch-and-load-image.component.html',
  styleUrl: './fetch-and-load-image.component.css'
})
export class FetchAndLoadImageComponent implements OnInit{
  startDate: Date = new Date();
  endDate: Date = new Date();
  images: any[] = [];

  constructor(private imageDownloadService: ImageDownloadService) {}
  ngOnInit(): void {
    this.startDate = new Date('2023-12-20');
    this.endDate = new Date('2023-12-29');
  }

  isLoading(image: any) {
    return !image.loaded && image.url !== null; // Adjust logic as needed
  }

  fetchData() {
    console.log("start date :: ", this.startDate);
    console.log("end date :: ", this.endDate);
    this.imageDownloadService.downloadImage(this.startDate, this.endDate)
        .subscribe(response => {
          /*console.log("sent success");
          console.log(response.files[0]);
          this.images = response.files.map((image: any) => btoa(image));
          console.log(this.images[0]);*/
          
          this.images = response.files;
          //this.imageUrl = 'data:image/png;base64,' + btoa(response.files[0]);
        }, error => {
          console.log("error :: ", error);
        });
  }
}
