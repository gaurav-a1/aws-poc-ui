import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageFile } from '../model/image-file.model';
import { ImageData } from '../model/image-data.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient) { }

  uploadImage(imageFiles: ImageFile[], userName: String): Observable<any> {
    // Code for making the backend call using this.http
    let imageDataList: ImageData[] = [];
    imageFiles.map(iF => {
      let base64DataArray = iF.base64Data.split(";");
      let dataType = base64DataArray[0].substring(5);
      let base64EncodedString = base64DataArray[1].substring(7);
      console.log("dataType :: " + dataType);
      console.log("base64EncodedString :: " + base64EncodedString);
      imageDataList.push({"imageName": iF.filename, 
        "imageBase64": base64EncodedString, 
        "dataType": dataType
      })});
    console.log("imageDataList :: " + imageDataList);
    var requestBody = { userName: userName, imageDataList: imageDataList};
    //return new Observable();
   	return this.http.post(environment.uploadUrl, requestBody);
  }
}
