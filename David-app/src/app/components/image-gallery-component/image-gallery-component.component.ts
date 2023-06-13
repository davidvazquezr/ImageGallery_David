import { Component,  OnInit } from '@angular/core';
import { ApiServicioComponent } from 'src/app/servicio/api.service'




@Component({
  selector: 'app-image-gallery-component',
  templateUrl: './image-gallery-component.component.html',
  styleUrls: ['./image-gallery-component.component.css'],
  providers: [ApiServicioComponent]
})
export class ImageGalleryComponent implements OnInit{
  imagen:any;
  array_org:any
  array_base : Array<object> = [];
  array_nuevo= [];
  array_nombre:any
  posts: any;
  valor: any;
  constructor(private ApiServicioComponent:ApiServicioComponent){}

  ngOnInit() {

  
  }
ngOnDestroy() {

	}
  addImage($event: never[]) {
    this.array_nuevo = $event;
    this.array_base.push(this.array_nuevo[0])   
  }
}
