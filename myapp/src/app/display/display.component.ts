import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
 import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  products: Product[] = [];

  product : Product=new Product('','','',0,0);
  
  constructor(private productService: ProductService){}

  productId:string='';
  brand:string='';


  displayAll() {  
    this.productService.displayAll().subscribe({
      next: (data) => {
        this.products = data; 
        console.log(this.products); 
      },
      error: (error) => {
        console.error(error); 
      },
      complete: () => console.log('Data Stream Completed') 
    });
  }

  displayById(productId:string){
    this.productService.displayById(productId).subscribe({
      next: (data) => {
        this.product = data; 
        console.log(this.product); 
      },
      error: (error) => {
        console.error(error); 
      },
      complete: () => console.log('Data Stream Completed') 
    });
  }

  displayByBrand(brand:string){
    this.productService.displayByBrand(brand).subscribe({
      next: (data) => {
        this.product = data; 
        console.log(this.product); 
      },
      error: (error) => {
        console.error(error); 
      },
      complete: () => console.log('Data Stream Completed') 
    });
  }

  get RecProducts(){
    return this.products;
  }

}
