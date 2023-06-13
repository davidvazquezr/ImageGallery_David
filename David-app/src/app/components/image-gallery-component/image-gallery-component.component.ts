import { Component, OnInit } from '@angular/core';
import { ApiServicioComponent } from 'src/app/servicio/api.service'



@Component({
  selector: 'app-image-gallery-component',
  templateUrl: './image-gallery-component.component.html',
  styleUrls: ['./image-gallery-component.component.css'],
  providers: [ApiServicioComponent]
})
export class ImageGalleryComponent implements OnInit{
  mensaje:string ="David bienvenido"
  
 
  constructor(private ApiServicioComponent:ApiServicioComponent){}

  ngOnInit() {

    this.ApiServicioComponent.getImagenes().subscribe(
      (res: any) => {
        console.log(res)
      },
      (error: any) => {
        console.log(error)
      }
    );
  }

}
