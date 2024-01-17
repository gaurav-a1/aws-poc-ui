import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageDownloadService {

  constructor(private http: HttpClient) { }

  downloadImage(startDate: Date, endDate: Date): Observable<any> {
    var requestBody = { startDate: startDate, endDate: endDate};
    return this.http.post(environment.downloadUrl, requestBody);
  }
}
