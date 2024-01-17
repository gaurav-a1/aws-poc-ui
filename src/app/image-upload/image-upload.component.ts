import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageFile } from '../model/image-file.model';
import { ImageUploadService } from '../service/image-upload.service';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent implements OnInit{

  selectedFiles: FileList | null = null;
  imageFiles: ImageFile[] = [];
  backendUrl = 'https://km27s65j2b.execute-api.ap-south-1.amazonaws.com/Test/image';
  imageNameCounter = 'aa';
  userName = '';
  constructor(private imageUploadService: ImageUploadService) {}
  ngOnInit(): void {
    this.selectedFiles = null;
    this.imageFiles = [];
    this.userName = '';
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    this.imageFiles = [];

    if(this.selectedFiles && this.selectedFiles.length <= 5) {
        for(let i=0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles[i];
        const reader = new FileReader();
        reader.onload = (e:any) => {
          this.imageFiles.push({filename: file.name, base64Data: e.target.result});
        };
        reader.readAsDataURL(file);
        this.imageNameCounter+='a';
      }
    } else {
      alert('Maximum 5 images');
      this.selectedFiles=null;
      this.imageFiles=[];
    }
  }

  onUserNameChange(event: any) {
    //console.log(event.target.value);
    this.userName = event.target.value;
    //console.log(this.userName);
  }

  sendImagesToBackend() {
    this.imageUploadService.uploadImage(this.imageFiles, this.userName)
        .subscribe(response => {
          console.log("sent success :: ", response);
        }, error => {
          console.log("sent failure :: ", error);
        })
    this.selectedFiles=null;
    this.imageFiles=[];
  }

}
