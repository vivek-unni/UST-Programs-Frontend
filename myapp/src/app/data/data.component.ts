import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})

export class DataComponent {

  productData: Product[] = [];
  product:Product=new Product('','','',0,0);

  onSubmit(){
    console.log(this.product);
  }

  count:number=0;

  minPrice: number = 0;
  maxPrice: number = 60001;

  constructor(private service: DataService) {
    this.productData = service.getProducts();
    console.log(this.productData);
  }

  filter:string="All";

  get filteredProducts() {
    return this.productData.filter(product => 
      (this.filter === 'All' || product.brand.includes(this.filter)) &&
      // product.price >= this.minPrice &&
      product.price <= this.maxPrice
    );
  }

  countChange() {
    return this.filteredProducts.length;
  }

}
