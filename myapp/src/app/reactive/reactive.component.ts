import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  productForm=new FormGroup({
    productid:new FormControl(0,[Validators.required,Validators.min(1000),Validators.max(9999)]),
    brand:new FormControl('',[Validators.maxLength(20),Validators.minLength(3)]),
    description:new FormControl('',[Validators.maxLength(20),Validators.minLength(3)]),
    qty:new FormControl(0),
    price: new FormControl(0),
  });

  onSubmit(){
    console.error(this.productForm)
    console.warn(this.productForm.value)
    console.log(this.productForm.controls['price'].value)
  }
}
