import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit{
  @Input() imagen:any;
  ngOnInit(): void {
    this.addImg();
  }

  addImg(){

    alert(this.imagen)

  }

}
