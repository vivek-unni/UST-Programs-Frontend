import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../Product';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,NgFor],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})

export class FormbuilderComponent {
  
  productForm:FormGroup;

  product=new Product('','','',0,0)

  constructor(private formBuilder: FormBuilder){


    this.productForm= this.formBuilder.group({
      productid:[,[Validators.required,Validators.minLength(8)]],
      brand:[''],
      description:this.formBuilder.group({
        age:[0],
        seasons:[''],
      }),
      qty:[0],
      price:[0],
      suppliers:this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }

  onSubmit(){
    console.error(this.productForm);
    console.log(this.productForm.get('suppliers')?.value)
    console.log((this.productForm.controls['suppliers'] as FormArray).at(0).value)
    console.log(this.productForm.get('brand')?.value)
    console.log(this.productForm.controls['brand'].value)
    console.log(this.productForm.get('description')?.get('age')?.value);
    console.log(this.productForm.get('suppliers')?.get([0])?.value); //this or below line, both same i guess
    console.log(this.suppliers.at(0).value);

    this.product.description=this.productForm.controls['description'].value!;
    console.log('from product ',this.product.description);
  }

  get suppliers(){
    return this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier(){
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }
}
