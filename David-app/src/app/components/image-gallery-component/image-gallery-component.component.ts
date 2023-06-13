import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery-component',
  templateUrl: './image-gallery-component.component.html',
  styleUrls: ['./image-gallery-component.component.css'],
  providers: []
})
export class ImageGalleryComponent implements OnInit{
  imagen:any;
  array_org:any
  array_base : Array<object> = [];
  array_nuevo= [];
  posts: any;
  valor: any;
  constructor(){}

  ngOnInit() {

  
  }

  ngOnDestroy() {

	}
  
  addImage($event: never[]) {
    this.array_nuevo = $event;
    console.log(this.array_nuevo[0])
    this.array_base.push(this.array_nuevo[0])   
  }
}
