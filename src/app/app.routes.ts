import { Routes } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { FetchAndLoadImageComponent } from './fetch-and-load-image/fetch-and-load-image.component';
import { HomeComponent } from './home/home.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'uploadImages', component: ImageUploadComponent},
    { path: 'viewImages', component: FetchAndLoadImageComponent},
    { path: 'video', component: VideoPlayerComponent}
];
