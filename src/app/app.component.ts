import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { FetchAndLoadImageComponent } from './fetch-and-load-image/fetch-and-load-image.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ImageUploadComponent, 
    FormsModule, FetchAndLoadImageComponent, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'image-upload-app';
}
