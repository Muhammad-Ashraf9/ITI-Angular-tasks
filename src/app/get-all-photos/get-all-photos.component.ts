import { Component, OnInit } from '@angular/core';
import { GetPhotosService } from '../get-photos.service';

@Component({
  selector: 'app-get-all-photos',
  templateUrl: './get-all-photos.component.html',
  styleUrls: ['./get-all-photos.component.css']
})
export class GetAllPhotosComponent implements OnInit {

  photosUrl:any;
  constructor(private photosserv:GetPhotosService) { }

  ngOnInit(): void {
    this.photosserv.getAllPhotos().subscribe(x=>{
      return this.photosUrl=x
    })
  }

}
