import { Component, OnInit, Inject, Input, EventEmitter, OnDestroy, Output } from "@angular/core";
import { FormControl, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';
import { ApiServicioComponent } from 'src/app/servicio/api.service'
@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  constructor(private ApiServicioComponent:ApiServicioComponent){}

  ngOnInit(): void {
  this.addImg();
  }
	posts: any;
	datosFiltradosOriginal: any;
  @Output() imagen:any;
  @Output() addImage = new EventEmitter<any>();

  headerGroup = new FormGroup({
		name: new FormControl('', [Validators.required])
	});
 
  addImg(){
    this.ApiServicioComponent.getImagenes().subscribe(
      (res: any) => {
        this.posts = res;
        this.datosFiltradosOriginal = [];
        res.forEach((val:any) => this.datosFiltradosOriginal.push(Object.assign({}, val)));    
      },
      (error: any) => {
        console.log(error)
      }
    );


  }

  llenaSeleccion(){
		if(this.headerGroup.controls.name.value != undefined){
			const seleccion = this.posts.filter((posts:any) => posts.name == this.headerGroup.controls.name.value);
			if(seleccion.length > 0){
        this.addImage.emit(seleccion);
        this.headerGroup.controls.name.setValue('');
			}else{
				this.headerGroup.controls.name.setValue('');
        alert("Debe seleccionar un nombre valido.")				
			}
		}else{
			this.headerGroup.controls.name.setValue('');
      alert("El nombre no es valido.")			
		}	
	}

}
