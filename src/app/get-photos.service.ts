import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {
  allPhotos:any;

  constructor(private http: HttpClient) { }
  getAllPhotos(){
   return this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos ')

  }
}
